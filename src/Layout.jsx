/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import FullSizeLoader from './components/FullSizeLoader';
import { AppBar, Avatar, Box, Card, CardContent, CardMedia, CssBaseline, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Skeleton, Stack, ThemeProvider, Toolbar, Typography, createTheme, css } from '@mui/material';
import { ArrowBack, Chat, Fastfood, LocationCity, Menu, Nightlight, PinDrop, Settings, WbSunny } from '@mui/icons-material';

import { Themes, useTheme } from './Contexts/ThemeContext';
import { useLoader } from './Contexts/LoaderContext';
import { APP_NAME, api_glue } from './constants';
import { useLogin } from './Contexts/LoginContext';
import { SnackbarProvider, useSnackbar } from 'notistack';

function Layout() {
    const [loading, setLoading] = useLoader();
    const drawerWidth = 240;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const navigate = useNavigate();
    const [theme, setTheme] = useTheme();

    const [LoginDetails, setLoginDetails] = useLogin();

    const snackbar = useSnackbar();

    useEffect(() => {
        // From Api
        if (!(LoginDetails && LoginDetails.location_lat)) {
            api_glue.get_me().then(me => {
                if (me.status == 'success') {
                    setLoginDetails(me.data);

                } else {
                    snackbar.enqueueSnackbar({ message: 'You\'re not logged in ', variant: 'warning' });
                    navigate('/signin');
                }
            }).catch(err => {
                snackbar.enqueueSnackbar({ message: 'You\'re not logged in ', variant: 'error' });
                navigate('/');
            });
        }
    }, [])

    const handleToggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }


    const goBack = () => {
        history.back(); // TODO : look for any other alternative
    }

    const toggleTheme = () => {
        if (theme == Themes.light)
            setTheme(Themes.dark)
        else
            setTheme(Themes.light);

    }

    return (
        // MuiThemeProvider
        <ThemeProvider
            theme={createTheme({
                palette: {
                    mode: theme,
                },
            })}
        >
            <CssBaseline>
                <div>
                    <AppBar className='static'>
                        <Toolbar>

                            {/* 
                        if router is like /abc/def then show back button 
                        but if its /abc/ or /abc then dont show it
                    */}
                            {(location.pathname.split('/').filter(p => p.trim() != '').length >= 2) ?
                                (
                                    <IconButton edge="start" onClick={goBack}>
                                        <ArrowBack sx={{ color: 'white' }} />
                                    </IconButton>
                                ) :
                                (
                                    // Home Drawer button
                                    <IconButton edge="start" onClick={handleToggleDrawer}>
                                        <Menu sx={{ color: 'white' }} />
                                    </IconButton>
                                )
                            }

                            {/* App Name */}
                            <Typography edge="center" variant="h6" noWrap component="div" sx={{ mx: 'auto' }}>
                                <Typography>{APP_NAME}</Typography>
                            </Typography>
                            {/* Theme Switch button */}
                            <IconButton edge="end" onClick={toggleTheme}>
                                {theme == Themes.light ?
                                    <WbSunny sx={{ color: 'white' }} />
                                    :
                                    <Nightlight />
                                }
                            </IconButton>
                        </Toolbar>
                    </AppBar>


                    {/* Drawer */}
                    <Drawer
                        varient="temporary"
                        open={isDrawerOpen}
                        onClose={handleToggleDrawer}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}

                        sx={{
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        <List style={{ paddingTop: "0px" }} component="nav">

                            {/* Profile Card */}

                            <Card>
                                {(LoginDetails && LoginDetails.id) ?
                                    <>
                                        <Avatar
                                            sx={{ height: 140, width: 140, mx: 'auto', mt: 2 }}
                                            src={LoginDetails.photo}
                                            alt={LoginDetails.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {LoginDetails.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {LoginDetails.bio}
                                            </Typography>
                                        </CardContent>

                                    </>
                                    :
                                    <>
                                        <Skeleton variant="rectangular" height={140} />
                                    </>
                                }

                            </Card>


                            <Divider />

                            {/* Links */}

                            <ListItemButton onClick={() => {
                                navigate('/feed');
                                setTimeout(setIsDrawerOpen, 300, false);
                            }}>
                                <ListItemIcon>
                                    <Fastfood />
                                </ListItemIcon>
                                <ListItemText primary="Activity Feed" />
                            </ListItemButton>

                            <ListItemButton onClick={() => {
                                // navigate('/feed');
                                alert('not implemented'); // bad?
                                setTimeout(setIsDrawerOpen, 300, false);
                            }}>
                                <ListItemIcon>
                                    <Chat />
                                </ListItemIcon>
                                <ListItemText primary="Messages" />
                            </ListItemButton>


                            <ListItemButton onClick={() => {
                                navigate('/feed/map');
                                setTimeout(setIsDrawerOpen, 300, false);
                            }}>
                                <ListItemIcon>
                                    <PinDrop />
                                </ListItemIcon>
                                <ListItemText primary="Food Locations" />
                            </ListItemButton>

                            <ListItemButton onClick={() => {
                                navigate('/feed/profile');
                                setTimeout(setIsDrawerOpen, 300, false);
                            }}>
                                <ListItemIcon>
                                    <Settings />
                                </ListItemIcon>
                                <ListItemText primary="Account" />
                            </ListItemButton>




                        </List>

                    </Drawer>



                    {/* Main Body (show loader if loading else show outlet) */}
                    {/* since app bar is 64px height we do mt 64px*/}
                    <Box sx={{ mt: '64px' }}>
                        {loading ?
                            <Box css={
                                css`
                            height: calc(100vh - 64px);
                            overflow-y: hidden;
                        `
                            }>
                                {/* since app bar is 64px height */}
                                <FullSizeLoader />
                            </Box>
                            :
                            <SnackbarProvider>
                                <Outlet />
                            </SnackbarProvider>
                        }
                    </Box>
                </div>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default Layout
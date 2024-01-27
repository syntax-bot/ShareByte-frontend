/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import FullSizeLoader from './components/FullSizeLoader';
import { AppBar, Box, Card, CardContent, CardMedia, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Skeleton, Stack, Toolbar, Typography, css } from '@mui/material';
import { ArrowBack, Chat, Fastfood, Menu, Nightlight, Settings, WbSunny } from '@mui/icons-material';

import { Themes, useTheme } from './Contexts/ThemeContext';
import { useLoader } from './Contexts/LoaderContext';
import { APP_NAME } from './constants';
import { useLogin } from './Contexts/LoginContext';
import { SnackbarProvider } from 'notistack';

function Layout() {
    const [loading, setLoading] = useLoader();
    const [theme, setTheme] = useTheme();

    const drawerWidth = 240;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const navigate = useNavigate();

    const [LoginDetails, setLoginDetails] = useLogin();

    useEffect(() => {
        // From Api
        setTimeout(() => {
            setLoginDetails({
                id: 1,
                name: 'My Name',
                photo: '/banners/banner1.jpg',
                bio: 'My Bio Here',
            });
        }, 3000);
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
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={LoginDetails.photo}
                                    title={LoginDetails.name}
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
                        // navigate('/feed');
                        alert('not implemented'); // bad?
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
    )
}

export default Layout
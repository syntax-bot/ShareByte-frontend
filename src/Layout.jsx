/** @jsxImportSource @emotion/react */

import React from 'react'
import { Outlet } from 'react-router-dom'
import FullSizeLoader from './components/FullSizeLoader';
import { AppBar, Box, IconButton, Toolbar, Typography, css } from '@mui/material';
import { ArrowBack, Nightlight, WbSunny } from '@mui/icons-material';

import { Themes, useTheme } from './Contexts/ThemeContext';
import { useLoader } from './Contexts/LoaderContext';
import { APP_NAME } from './constants';

function Layout() {
    const [loading, setLoading] = useLoader();
    const [theme, setTheme] = useTheme();


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
                    {(location.pathname.split('/').filter(p => p.trim() != '').length >= 2) &&
                        < IconButton edge="start" onClick={goBack}>
                            <ArrowBack sx={{ color: 'white' }} />
                        </IconButton>
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
                    <Outlet />
                }
            </Box>
        </div >
    )
}

export default Layout
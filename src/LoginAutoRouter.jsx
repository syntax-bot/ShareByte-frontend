import React, { useEffect, useState } from 'react'
import { useLogin } from './Contexts/LoginContext'
import { Outlet, useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import FullSizeLoader from './components/FullSizeLoader';

function LoginAutoRouter() {
    // Using destructuring to get loginData and setLoginData from the LoginContext
    const [loginData, setLoginData] = useLogin();
    const [mounted, setMounted] = useState(false);

    const navigate = useNavigate();

    // Defining constants for better maintainability
    const routeFrom = ['/'];
    const loginRoutes = ['/feed'];
    const navigateTarget = '/feed';

    useEffect(() => {
        // Checking if user is logged in and on the login-enabled route

        if (loginData && routeFrom.includes(location.pathname)) {
            const pathnams = location.pathname.split('/').map(p => '/' + p);

            let shouldRoute = true;

            // Checking if we are already in a login-enabled route, if yes, we don't navigate
            loginRoutes.forEach(login_route => {
                if (pathnams.includes(login_route)) shouldRoute = false;
            });

            if (shouldRoute) {
                navigate(navigateTarget);
            } else {
                setMounted(true);
            }

        } else {
            setMounted(true);
        }
    }, [loginData]);

    return (
        mounted ? <Outlet />: <FullSizeLoader />
    )
}

export default LoginAutoRouter
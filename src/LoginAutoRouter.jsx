import React, { useEffect, useState } from 'react'
import { useLogin } from './Contexts/LoginContext'
import { Outlet, useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import FullSizeLoader from './components/FullSizeLoader';

function LoginAutoRouter() {
    const [loginData, setLoginData] = useLogin();
    const [mounted, setMounted] = useState(false);

    const navigate = useNavigate();

    const route_from = ['/'];
    const login_routes = ['/feed'];
    const navigate_target = '/feed';

    useEffect(() => {
        if (loginData && route_from.includes(location.pathname)) {
            const pathnams = location.pathname
                .split('/')
                .map(p => '/' + p);

            let should_route = true;
            // check if we are already 
            // in login enabled route then we dont navigate
            login_routes.forEach(login_route => {
                if (pathnams.includes(login_route)) should_route = false;
            });

            if (should_route) navigate(navigate_target);
            else setMounted(true);
        } else {
            setMounted(true);
        }
    }, [loginData]);

    return (
        mounted ?
            <Outlet />
            :
            <FullSizeLoader />
    )
}

export default LoginAutoRouter
import React, { useState } from 'react'
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { Expand, Menu } from '@mui/icons-material';
import { Collapse, IconButton } from '@mui/material';

const Header = () => {

    const [expanded, setExpanded] = useState(false);

    const renderNav = () => {
        return (
            <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/signup">Sign up</NavLink>
                <NavLink to="/signin">Sign in</NavLink>
                <button className='button '>
                    <NavLink href='/feed'>
                        Get Started
                    </NavLink>
                </button>

            </>
        )
    }
    return (
        <section className='h-wrapper'>
            <div className="flexCenter paddings h-container innerWidth">
                <img src="./ShareBiteLogo.png" alt='logo' width={200} />

                <div className="h-menu md:flex items-center justify-center  hidden">
                    {renderNav()}
                </div>

                <div className="md:hidden flex flex-col">
                    <IconButton onClick={() => { setExpanded(!expanded); }}>
                        <Menu sx={{ color: 'white' }} />
                    </IconButton>
                </div>
                <div className={`md:hidden  flex flex-col`}>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <div className="h-menu flex flex-wrap items-center justify-center">
                            {renderNav()}
                        </div>
                    </Collapse>
                </div>


            </div>
        </section>
    )
}

export default Header
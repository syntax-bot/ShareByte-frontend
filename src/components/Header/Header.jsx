import React, { useState } from 'react'
import "./header.css";
import {  NavLink } from "react-router-dom";
import { BiMenuAltRight } from 'react-icons/bi';
import OutSideClickHandler from 'react-outside-click-handler';
import { Close } from '@mui/icons-material';

const Header = () => {
    const [menuOpened, setmenuOpened] = useState(false);

    const getMenuStyle = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }
    return (
        <section className='h-wrapper'>
            <div className="flexCenter paddings h-container innerWidth">
                <img src="./ShareBiteLogo.png" alt='logo' width={200} />

                <OutSideClickHandler onOutsideClick={() => {
                    setmenuOpened(false);
                }}>
                    <div className="flexCenter  h-menu" style={getMenuStyle(menuOpened)}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/signup">Sign up</NavLink>
                        <NavLink to="/signup">Sign in</NavLink>
                        <button className='button '>
                            <NavLink href='/feed'>
                                Get Started
                            </NavLink>
                        </button>
                    </div>
                </OutSideClickHandler>
                <div className="menu-icon" onClick={() => setmenuOpened(!menuOpened)}>
                    {menuOpened ?
                        <Close />
                        :
                        <BiMenuAltRight size={30}></BiMenuAltRight>
                    }
                </div>
            </div>
        </section>
    )
}

export default Header
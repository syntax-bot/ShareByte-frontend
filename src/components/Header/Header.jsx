import React from 'react'
import "./header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className='h-wrapper'>
        <div className="flexCenter paddings h-container innerWidth">
            <img src="./ShareBiteLogo.png" alt='logo' width={200}/>

            <div className="flexCenter  h-menu">
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
        </div>
    </section>
  )
}

export default Header
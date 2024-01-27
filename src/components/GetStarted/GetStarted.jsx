import React from "react";
import "./getstarted.css";
import { NavLink } from "react-router-dom";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Join Us, Feed Hope Together</span>
          <span className="secondaryText">
            Together, we can make a lasting impact and create a world where no
            one goes to bed hungry.
            <br /> Join us on this journey to make a difference, one meal at a
            time.
          </span>

          {/* Connect this button to the Backend after clicking this button user went to feed page if not loged in the sent to sign in page (This behaviour is same for Get started buttton on header section use a middleware to do so) */}
          <button className="button getStartedBtn">
            <NavLink  to="/signin">Get Started</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

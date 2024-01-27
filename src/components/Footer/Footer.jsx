import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./ShareBiteLogo.png" alt="" width={200} />

          <span className="secondaryText">
            Empowering Communities, Ending Hunger
          </span>
        </div>

        {/* right side */}
        <div calassName="flexColStart f-right">
          <div className="flexColStart">
            <span className="primaryText">Information</span>
            <span className="secondaryText">145 Convention Center, JNU (NEW-Delhi), India</span>
          </div>

          <div className="flexCenter f-menu">
            <span>Food</span>
            <span>Services</span>
            <span>Product</span>
            <NavLink to="/about">About us</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

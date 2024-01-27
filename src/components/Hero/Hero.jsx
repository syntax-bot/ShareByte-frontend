import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Title <br />
              For the <br /> website
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Lorem ipsum dolor sit amet consectetur!</span>
            <span className="secondaryText">Lorem ipsum sit amet consectetur adipisicing.</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}></HiLocationMarker>
            <input type="text" className="secondaryText"/>
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            {/* stat 1 */}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={900} end={1000} duration={6}></CountUp>
                <span>+</span>
              </span>
              <span className="secondaryText">Feeding mean</span>
            </div>

             {/* stat 2 */}
            <div className="flexColCenter stat">
              <span>
                <CountUp end={78} ></CountUp>
                <span>+</span>
              </span>
              <span className="secondaryText">Served man</span>
            </div>

            {/* stat 3 */}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={100} duration={6}></CountUp>
                <span>+</span>
              </span>
              <span className="secondaryText">Working man</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./profile.jpg" alt="" style={{objectFit:'cover'}}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

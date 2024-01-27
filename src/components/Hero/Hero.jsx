import React, {useEffect, useState} from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Search } from "@mui/icons-material";

const placeholderData=["Pin","Your", "location", "here.",]

const Hero = () => {

  const [placeholder,setPlaceholder]=useState(0);
    
   let id=setInterval(()=>{
    clearInterval(id);
    if(placeholder==placeholderData.length){
      setPlaceholder(0);
    }
    else{
      setPlaceholder(placeholder+1);
    }
   },500);
   
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1 initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring"
              }}
            >
              Empowering<br />Communities,
              <br />Ending Hunger
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Savoring a Future of Food Security for All.</span>
            <span className="secondaryText">Harvesting Hope: Nourishing Lives, One Meal at a Time</span>
          </div>

          <div className="search-bar flex justify-center items-center gap-2 mx-auto">
            <HiLocationMarker color="var(--blue)" size={25}></HiLocationMarker>
            <input type="text" style={{ color: 'var(--blue)', width: '100%', maxWidth: 200 }} placeholder={placeholderData[placeholder]}/>
            <button className="button">
              <span className="hidden md:inline">Pin</span>
              <span className="md:hidden"><Search /></span>
            </button>
          </div>

          <div className="flexCenter stats">
            {/* stat 1 */}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={900} end={1000} duration={6}></CountUp>
                <span>+</span>
              </span>
              <span className="secondaryText">People Feeded today</span>
            </div>

            {/* stat 2 */}
            <div className="flexColCenter stat">
              <span>
                <CountUp end={88} ></CountUp>
                <span>+</span>
              </span>
              <span className="secondaryText">People Feeding today</span>
            </div>

            {/* stat 3 */}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={200} duration={6}></CountUp>
                <span>+</span>
              </span>
              <span className="secondaryText">Donaters</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div className="image-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
          >
            <img src="./profile.jpg" alt="" style={{ objectFit: 'cover' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// AboutPage.js
import React from "react";
import "./aboutpage.css";
import Footer from "../../components/Footer/Footer.jsx";
import teamMembers from "./teamMember.json";
import sliderData from "./sliderData.json";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import {  NavLink } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="logoOnAbout">
        <NavLink to="/">
          <img src="./ShareBiteLogo.png" alt="logo" width={200} />
        </NavLink>
      </div>
      <h1 className="about-title">About Us</h1>
      <div className="section-line">Meet the team behind the project</div>
      <br />
      <br />
      {/* Team Members Cards Section */}
      <div className="card-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="card">
            <img src={member.image} alt={`Card ${member.id}`} />
            <h2 className="card-name">{member.name}</h2>
            <p className="card-description">{member.description}</p>
            <div className="github-profile">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      {/* Why Choose Section */}
      <div className="why-choose-section">
        <h2 className="section-heading">
          Why We Choose This Project Should Be Done?
        </h2>
        <p className="section-description">
          The challenge is not a lack of food ~ it is making food consistently
          available to everyone who needs it.
        </p>
      </div>
      <br /> <br />
      {/* Swiper Slider Section */}
      <Swiper
        style={{ width: "60%" }}
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSwiper={(swiper) => (window.swiper = swiper)}
        className="mySwiper"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="swiper-card flex items-center justify-center flex-col gap-2">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="circular-image"
              />
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default AboutPage;

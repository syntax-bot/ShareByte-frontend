import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "./fact.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common.js";
import { Navigation ,Autoplay} from "swiper/modules";

const Fact = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">We Are Concerned</span>
          <span className="primaryText">About</span>
        </div>
        <Swiper
          {...sliderSettings}
          modules={[Navigation,Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Adjust the delay as needed (5000 milliseconds = 5 seconds)
          onSwiper={(swiper) => (window.swiper = swiper)}
          loop={true}
        >
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <a href={card.link} target="_blank">
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />

                  {/* This section has still some problem to fix */}
                  <span className="primaryText">{card.name}</span>
                  <span className="smallText">{card.detail}</span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Fact;

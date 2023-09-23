import React from "react";
import "./Style.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../utils/slider.json";
import { sliderSettings } from "../utils/common";

const Slider = () => {
  return (
    <section className="s-wrapper">
      <div className="paddings innerWidth s-container">
        <div className="s-head paddings flexColStart">
          <span className="blueText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart s-card">
                <img src={card.image} alt="#" />
                <span className="secondaryText s-price">
                  <span className="blueText">$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter secondaryText s-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

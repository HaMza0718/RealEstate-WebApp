import React from "react";
import "./Style.css";
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="circle" />
          <div className="paddings hero-title">
            <h1>
              Where Dreams <br /> Find a Home🏡
            </h1>
          </div>
          <div className="flexColStart hero-description">
            <span className="secondaryText">
              Where Every Home Becomes a Story. Your Trusted Partner in Real
              Estate,
            </span>
            <span className="secondaryText">
              we specialize in making your property aspirations a reality, one
              dream home at a time.
            </span>
          </div>
          <div className="flexCenter search-bar">
            <div className="search">
              <input placeholder="Search..." type="text" />
              <button type="submit">Go</button>
            </div>
          </div>
          <div className="flexCenter stats">
          <div className="flexColCenter stat">
            <span>
              <CountUp start={4000} end={5000} duration={4}/>
              <span>+</span>
            </span>
            <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
            <span>
              <CountUp start={2500} end={3000} duration={4}/>
              <span>+</span>
            </span>
            <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter stat">
            <span>
              <CountUp end={50} duration={4}/>
              <span>+</span>
            </span>
            <span className="secondaryText">FeedBack</span>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image1.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

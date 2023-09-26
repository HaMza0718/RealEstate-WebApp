import React from "react";
import "./Style.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <sapn className="primaryText">Get Started with Next Home</sapn>
          <sapn className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br />
            Find your residence soon
          </sapn>
          <button className="start-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

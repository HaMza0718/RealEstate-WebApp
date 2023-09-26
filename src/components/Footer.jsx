import React from "react";
import "./Style.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <div className="flexCenter">
            <a className="logo-head">Next Home</a>
            <img src="./pngegg.png" alt="logo" width={100} />
          </div>
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Karachi, Pakistan</span>
          <div className="flexCenter f-menu">
            <span>Residence</span>
            <span>Our Value</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

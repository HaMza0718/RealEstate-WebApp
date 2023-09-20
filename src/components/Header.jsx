import React from "react";
import './Style.css';
const Header = () => {
  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./pngegg.png" alt="logo" width={100}/>
          <div className="flexCenter h-menu">
            <a href="">Residence</a>
            <a href="">Our Value</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <button className="button">
            Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

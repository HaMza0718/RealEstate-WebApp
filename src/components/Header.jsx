import React, { useState } from "react";
import "./Style.css";
import { BiMenu } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuStyle = (openMenu) => {
    if (document.documentElement.clientWidth <= 780) {
      return { right: !openMenu && "-100%" };
    }
  };
  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <div className="flexCenter">
            <a className="logo-head">Next Home</a>
            <img src="./pngegg.png" alt="logo" width={100} />
          </div>
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpenMenu(false);
            }}
          >
            <div className="flexCenter h-menu" style={menuStyle(openMenu)}>
              <a href="">Residence</a>
              <a href="">Our Value</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <button className="button">Get Started</button>
            </div>
          </OutsideClickHandler>
          <div
            className="menu-icon"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <BiMenu size={30} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

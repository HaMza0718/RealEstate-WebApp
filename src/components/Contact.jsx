import React from "react";
import "./Style.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsFillCameraVideoOffFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="con-wrapper">
      <div className="paddings innerWidth flexCenter con-container">
        <div className="flexColStart con-left">
          <span className="primaryText">Contact Us</span>
          <span className="blueText">Easy to Communicate</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quibusdam earum veniam?
          </span>
          <div className="flexColStart contact-modes">
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Call</span>
                    <span>0900 123 456</span>
                  </div>
                </div>
                <button className="flexCenter con-button">Call Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="con-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

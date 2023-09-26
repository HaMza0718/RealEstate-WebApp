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
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">0900 123 456</span>
                  </div>
                </div>
                <button className="flexCenter con-button">Call Now</button>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">0900 123 456</span>
                  </div>
                </div>
                <button className="flexCenter con-button">Chat Now</button>
              </div>
            </div>
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillCameraVideoOffFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">0900 123 456</span>
                  </div>
                </div>
                <button className="flexCenter con-button">
                  Video Call Now
                </button>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">abc@email.com</span>
                  </div>
                </div>
                <button className="flexCenter con-button">Email Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flexColStart con-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

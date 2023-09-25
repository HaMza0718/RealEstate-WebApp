import React, { useState } from "react";
import "./Style.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../utils/accordion";

const Value = () => {
  return (
    <section className="value-wrapper">
      <div className="paddings innerWidth flexCenter value-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.jpg" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="primaryText">Our Value</span>
          <span className="blueText">Value we give to you</span>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            a quam quia saepe, <br /> neque fuga unde distinctio beatae quasi
            libero quidem nesciunt ullam laudantium!
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className='accordionItem'
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionItemButton">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText itemHead">
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="paddings secondaryText">
                    {item.detail}
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

import React from "react";
import { useState } from "react";
import { faqs } from "./data";
// import './FAQAccordion.css'

import "./FAQ.css";
import FAQAccordionItem from "./FAQAccordionItem";
import FAQImg from './FAQImg.png'

function FAQAccordion() {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <div className="faq-container" id='faq'>
        <div className='faq-heading'>
            <h1>Frequently Asked Questions</h1>
        </div>
        <div className="faq-flex-container">
            <div className="faq-flex-questions">
                {faqs.map((faq, index) => (
                    <FAQAccordionItem key={index} faq={faq} onToggle={() => handleToggle(index)} active={clicked === index}/>
                ))}
            </div>
            <div className='faq-flex-image'>
                <img src={FAQImg} alt='FAQImg' />
            </div>
        </div>
    </div>
  );
}

export default FAQAccordion;

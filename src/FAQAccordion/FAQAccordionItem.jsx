import React from "react";
import { useRef } from "react";
import "./FAQ.css";

function FAQAccordionItem({ faq, onToggle, active }) {

  const { question, answer } = faq;

  const contentEl = useRef();

  return (
    <div className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button" onClick={onToggle}>
        {question}
        <span className="control">{active ? <p>&#8963;</p> : <p>&#8964;</p>}</span>
      </button>
      <div 
        ref={contentEl} 
        className="answer_wrapper" 
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">{answer}</div>
      </div>
    </div>
  );
}


// className={`answer_wrapper ${active ? "open" : ""}`}
export default FAQAccordionItem;

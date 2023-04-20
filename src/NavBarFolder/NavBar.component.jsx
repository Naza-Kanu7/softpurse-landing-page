import React from "react";
import { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./NavBar.css";
import SoftPurseLogo from './SoftPurseLogo.png'

function NavBar() {

  const [linkSelected, setLinkSelected] = useState('home')
  const [menuIconActive, setMenuIconActive] = useState(false)

  const handleClick = (value) => {
    setLinkSelected(value)
  }

  const handleMenuClick = () => {
    setMenuIconActive(!menuIconActive)
  }

  return (
    <div className="header-container">
      <div className="header-image">
        <img src={SoftPurseLogo} alt="SoftPurse Logo" />
      </div>
      <div className="header-texts">
        <a href="#"><h4 className={linkSelected === "home" ? "active-header-text" : ""}onClick={() => handleClick("home")}>Home</h4></a>
        <a href="#features">
          <h4
            className={linkSelected === "features" ? "active-header-text" : ""}
            onClick={() => handleClick("features")}
          >
            Features
          </h4>
        </a>
        <a href="#faq">
          <h4
            className={linkSelected === "faq" ? "active-header-text" : ""}
            onClick={() => handleClick("faq")}
          >
            FAQ
          </h4>
        </a>
        <a href="#download">
          <h4
            className={linkSelected === "download" ? "active-header-text" : ""}
            onClick={() => handleClick("download")}
          >
            Download
          </h4>
        </a>
      </div>
      <div className="dropdown-menu">
        <div
          className={menuIconActive ? "menu-icon menu-btn" : "menu-icon"}
          onClick={handleMenuClick}
        >
          <span className={menuIconActive ? "bar-icon-open" : "bar-icon-close"}>
            <FaBars />
          </span>
          <span className={menuIconActive ? "bar-icon-close" : "bar-icon-open"}>
            <FaTimes />
          </span>
        </div>
        <div
          className={
            menuIconActive ? "menu-content menu-content-active" : "menu-content"
          }
        >
          <a className="links-hidden" href="#">
            Home
          </a>
          <a className="links-hidden" href="#features">
            Features
          </a>
          <a className="links-hidden" href="#faq">
            FAQ
          </a>
          <a className="links-hidden" href="#download">
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

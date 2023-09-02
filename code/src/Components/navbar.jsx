import { useState } from "react";
import "../../src/App.css";
import logoimg from "../assets/images/Headr/logo-img.svg";

function Navbar() {
  return (
    <div>
      <div className="logo">
        <img src={logoimg} alt="" />
        <h1>Farmscape</h1>
      </div>
      <Hamburger />
      <hr className="line" />
      <div className="navbar">
        <div className="nav-items" id="item-1">
          <a href="/index.html" className="page-link">
            Home
          </a>
        </div>
        <div className="nav-items" id="item - 2">
          <a href="aboutus.html" className="page-link">
            About us
          </a>
        </div>
        <div className="nav-items" id="item-3">
          <a href="/services.html" className="page-link">
            Services
          </a>
        </div>
        <div className="nav-items" id="item-4">
          <a href="/contactus.html " className="page-link">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}

function Hamburger() {
  const [dropdown, setDropdown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  function toggledropdown() {
    setDropdown(!dropdown);
    console.log(dropdown);
  }
  const toggleActive = () => {
    setIsActive(isActive);
    console.log(isActive);
  }
  return (
    <div>
      <div className="hamburger-icon" onClick={toggledropdown}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {dropdown && (
        <div className="dropdown-menu">
          <ul className="dropdown-list">
            <li href="#" className="dp-list-items" onClick={toggleActive} >
              Home
            </li>
            <li href="#" className="dp-list-items">
              About us
            </li>
            <li href="#" className="dp-list-items">
              Services
            </li>
            <li href="#" className=" dp-list-items ">
              Contact us
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

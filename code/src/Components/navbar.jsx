import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/App.css";
import logoimg from "../assets/images/Headr/logo-img.svg";
import Product from "./products";

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
          <a className="page-link" onClick={() => navigate("Home")}>
            Home
          </a>
        </div>
        <div className="nav-items" id="item - 2">
          <a className=" page-link" onClick={() => navigate("Product")}>
            Products
          </a>
        </div>
        <div className="nav-items" id="item-3">
          <a className="page-link" onClick={() => navigate("Dashboard")}>
            Dashboard
          </a>
        </div>
        <div className="nav-items" id="item-4">
          <a className="page-link" onClick={() => navigate("Contactus")}>
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
  const [Index, SetIndex] = useState(null);
  const navigate = useNavigate();
  function toggledropdown() {
    setDropdown(!dropdown);
  }
  const toggleActive = () => {
    setIsActive(isActive);
  };
  function handleClick(index) {
    SetIndex(index);
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
            <li className="dp-list-items">Home</li>
            <li className="dp-list-items">
              <a onClick={() => handleClick(2)}>
                {Index === 2 && navigate("Product")}
                Products
              </a>
            </li>
            <li className="dp-list-items" onClick={() => navigate("Dashboard")}>
              <a onClick={() => handleClick(3)}>
                {Index === 3 && navigate("Dashboard")}
                Dashboard
              </a>
            </li>
            <li className=" dp-list-items ">
              <a onClick={() => handleClick(4)}>
                {Index === 4 && navigate("Contactus")}
                Contact us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

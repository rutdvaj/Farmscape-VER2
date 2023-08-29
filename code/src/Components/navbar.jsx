import "../../src/App.css";
import logoimg from "../assets/images/Headr/logo-img.svg";

function Navbar() {
  return (
    <div>
      <div className="logo">
        <img src={logoimg} alt="" />
        <h1>Farmscape</h1>
      </div>
      <Hamburger/>
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
  return (
    <div>
      <div className="hamburger-icon" onClick={Dropdown}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
      </div>
    
    </div>
  )
}

function Dropdown() {
  return(  <div className="dropdown-menu">
        <div className="logo">
        <img src={logoimg} alt="" />
        <h1>Farmscape</h1>
        </div>
        <ul className="dropdown-list">
          <li href="#">Home</li>
          <li href="#">About us</li>
          <li href="#">Services</li>
          <li href="#" className="dp-list-item">Contact us</li>
        </ul>
    </div>)
}

export default Navbar;

import profileimg from "../../src/assets/images/Headr/p-img.png";
import backicon from "../../src/assets/images/Headr/🦆 icon _arrow-left_.png";
import ADimg from "../../src/assets/images/Headr/🦆 icon _user_.png";
import PUimg from "../../src/assets/images/Headr/🦆 icon _credit card_.png";
import OHimg from "../../src/assets/images/Headr/🦆 icon _Sort Amount Down_.png";
import OTimg from "../../src/assets/images/Headr/🦆 icon _Alternate Map Marker_.png";
import CSimg from "../../src/assets/images/Headr/🦆 icon _interface help customer support 1_.png";
import selPUimg from "../../src/assets/images/Headr/🦆 white_icon _credit card_ (1).png";
import blADimg from "../../src/assets/images/Headr/🦆 icon black _user_.png";
import selOHimg from "../../src/assets/images/Headr/🦆 icon white__Sort Amount Down_.png";
import selOTimg from "../../src/assets/images/Headr/🦆 icon white__Alternate Map Marker_ (1).png";
import selCSimg from "../../src/assets/images/Headr/🦆 icon white__interface help customer support 1_ (1).png";
import { useState } from "react";

const Useradm = () => {
  const [isActive, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <>
      <div className="navbar">
        <div className="back-icon">
          <img src={backicon} alt="" />
        </div>
        <h1 className="UA-header">Dashboard</h1>
        <div className="profile-img">
          <h3 UA-compname>XYZcorp</h3>
          <img src={profileimg} alt="" />
        </div>
      </div>

      <div className="AD">
        <div className="AD-list">
          <ul className="DB-list">
            <li
              className={isActive === 1 ? "active-button" : ""}
              onClick={() => handleClick(1)}
            >
              <div className="li">
                <div className="li-img">
                  {isActive === 1 ? (
                    <img src={ADimg} alt="" />
                  ) : (
                    <img src={blADimg} alt="" />
                  )}
                </div>
                <p> Account details</p>
              </div>
            </li>
            <li
              className={isActive === 2 ? "active-button" : ""}
              onClick={() => handleClick(2)}
            >
              <div className="li">
                <div className="li-img">
                  {isActive === 2 ? (
                    <img src={selPUimg} alt="" />
                  ) : (
                    <img src={PUimg} alt="" />
                  )}
                </div>
                <p>Payment Updates</p>
              </div>
            </li>
            <li
              className={isActive === 3 ? "active-button" : ""}
              onClick={() => handleClick(3)}
            >
              <div className="li">
                <div className="li-img">
                  {isActive === 3 ? (
                    <img src={selOHimg} alt="" />
                  ) : (
                    <img src={OHimg} alt="" />
                  )}
                </div>
                <p>Order History</p>
              </div>
            </li>
            <li
              className={isActive === 4 ? "active-button" : ""}
              onClick={() => handleClick(4)}
            >
              <div className="li">
                <div className="li-img">
                  {isActive === 4 ? (
                    <img src={selOTimg} alt="" />
                  ) : (
                    <img src={OTimg} alt="" />
                  )}
                </div>
                <p>Order Tracking</p>
              </div>
            </li>
            <li
              className={isActive === 5 ? "active-button" : ""}
              onClick={() => handleClick(5)}
            >
              <div className="li">
                <div className="li-img">
                  {isActive === 5 ? (
                    <img src={selCSimg} alt="" />
                  ) : (
                    <img src={CSimg} alt="" />
                  )}
                </div>
                <p>Customer Support</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="AD-content">
          <div className="AD-content-h1">
            <h1>Account Details</h1>
          </div>
          <div className="AD-content-1">
            <div className="AD-content-1-1">
              <h2>Business Email</h2>
              <p>info@XYZcorp.com</p>
            </div>
            <div className="AD-content-1-2">
              <h2>Linkedin ID</h2>
              <p>MelindaJennings_87</p>
            </div>
          </div>
          <div className="AD-content-2">
            <div className="AD-content-2-1">
              <h2>Postal Address</h2>
              <p>123 Elm Street,Anytown, USA12345</p>
            </div>
            <div className="AD-content-2-2">
              <h2>Contact number</h2>
              <p>+1 (555) 555-5555</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Useradm;

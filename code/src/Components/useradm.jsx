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
import backiconsm from "../../src/assets/images/hs-images/mobile-images/🦆 icon _arrow-left-sm_.png";
import AccountDetails from "./Accountdetails";
import PaymentUpdates from "./PaymentUpdates";
import OrderHistory from "./OrderHistory";
import OrderTracking from "./OrderTracking";
import CustomerService from "./CustomerService";
import UaHamburger from "./UAhamburger";
import { useState } from "react";
import { useEffect } from "react";

const Useradm = () => {
  const [isActive, setActive] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleClick = (index) => {
    setActive(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      console.log(`${screenWidth}px`);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="navbar-UA">
        <div className="back-icon">
          <img src={backicon} alt="" className="desktop-img" />
          <img src={backiconsm} alt="" className="mobile-img" />
        </div>
        <h1 className="UA-header">Dashboard</h1>
        <div className="profile-img">
          <h3 UA-compname>XYZcorp</h3>
          <img src={profileimg} alt="" className="desktop-img" />
          <div className="">
            {/* <img src={menu} alt="" /> */}
            <UaHamburger />
          </div>
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
          {isActive === 1 && screenWidth >= 390 && (
            <div>
              <AccountDetails />
            </div>
          )}

          {isActive === 2 && screenWidth >= 390 && (
            <div>
              <PaymentUpdates />
            </div>
          )}

          {isActive === 3 && screenWidth >= 390 && (
            <div>
              <OrderHistory />
            </div>
          )}

          {isActive === 4 && screenWidth >= 390 && (
            <div>
              <OrderTracking />
            </div>
          )}

          {isActive === 5 && screenWidth >= 390 && (
            <div>
              <CustomerService />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Useradm;

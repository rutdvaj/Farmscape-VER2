import { useState, useEffect } from "react";
import menu from "../../src/assets/images/hs-images/mobile-images/🦆 icon _menu_.png";
import AccountDetails from "./Accountdetails";
import CustomerService from "./CustomerService";
import OrderHistory from "./OrderHistory";
import OrderTracking from "./OrderTracking";
import PaymentUpdates from "./PaymentUpdates";

const UaHamburger = () => {
  const [dropdown, setDropdown] = useState(false);
  const [Active, setActive] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  function toggledropdown() {
    setDropdown(!dropdown);
  }

  function handleClick(index) {
    setActive(index);
  }

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
      <div className="mobile-img HM-img" onClick={toggledropdown}>
        <img src={menu} alt="" />
      </div>
      {dropdown && screenWidth <= 390 && (
        <div>
          <ul className="HB-menu-list">
            <li
              className={Active === 1 ? "active-button-HB" : "HB-list"}
              onClick={() => handleClick(1)}
            >
              <p>Account Details</p>
            </li>
            <li
              className={Active === 2 ? "active-button-HB" : "HB-list"}
              onClick={() => handleClick(2)}
            >
              <p>Payment Updates</p>
            </li>
            <li
              className={Active === 3 ? "active-button-HB" : "HB-list"}
              onClick={() => handleClick(3)}
            >
              <p>Order History</p>
            </li>
            <li
              className={Active === 4 ? "active-button-HB" : "HB-list"}
              onClick={() => handleClick(4)}
            >
              <p>Order Tracking</p>
            </li>
            <li
              className={Active === 5 ? "active-button-HB" : "HB-list"}
              onClick={() => handleClick(5)}
            >
              <p>Customer Support</p>
            </li>
          </ul>
        </div>
      )}

      <div className="AD-content">
        {Active === 1 && screenWidth <= 390 && (
          <div>
            <AccountDetails />
          </div>
        )}

        {Active === 2 && screenWidth <= 390 && (
          <div>
            <PaymentUpdates />
          </div>
        )}

        {Active === 3 && screenWidth <= 390 && (
          <div>
            <OrderHistory />
          </div>
        )}

        {Active === 4 && screenWidth <= 390 && (
          <div>
            <OrderTracking />
          </div>
        )}

        {Active === 5 && screenWidth <= 390 && (
          <div>
            <CustomerService />
          </div>
        )}
      </div>
    </>
  );
};

export default UaHamburger;

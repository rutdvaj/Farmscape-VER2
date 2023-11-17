import { useState } from "react";
import menu from "../../src/assets/images/hs-images/mobile-images/🦆 icon _menu_.png";
import AccountDetails from "./Accountdetails";
import CustomerService from "./CustomerService";
import OrderHistory from "./OrderHistory";
import OrderTracking from "./OrderTracking";
import PaymentUpdates from "./PaymentUpdates";

const UaHamburger = () => {
  const [dropdown, setDropdown] = useState(false);
  const [Active, setActive] = useState(null);
  function toggledropdown() {
    setDropdown(!dropdown);
  }

  function handleClick(index) {
    setActive(index);
  }
  return (
    <>
      <div className="mobile-img HM-img" onClick={toggledropdown}>
        <img src={menu} alt="" />
      </div>
      {dropdown && (
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
      <div className="AD-content-mobile">
        {Active === 1 && (
          <div>
            <AccountDetails />
          </div>
        )}

        {Active === 2 && (
          <div>
            <PaymentUpdates />
          </div>
        )}

        {Active === 3 && (
          <div>
            <OrderHistory />
          </div>
        )}

        {Active === 4 && (
          <div>
            <OrderTracking />
          </div>
        )}

        {Active === 5 && (
          <div>
            <CustomerService />
          </div>
        )}
      </div>
    </>
  );
};

export default UaHamburger;

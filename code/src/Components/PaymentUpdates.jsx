import CC1infoimg from "../../src/assets/images/Headr/CCA1-info.png";
import CC2infoimg from "../../src/assets/images/Headr/CC2-info.png";
import CC3infoimg from "../../src/assets/images/Headr/CC3- info.png";
import CC1img from "../../src/assets/images/Headr/CC1.png";
import CC2img from "../../src/assets/images/Headr/CC2.png";
import CC3img from "../../src/assets/images/Headr/CC3.png";

const PaymentUpdates = () => {
  return (
    <>
      <div className="PU PU-mobile">
        <div className="PU-img">
          <div className="PU-img-1">
            <img src={CC1infoimg} alt="" />
          </div>
          <div className="PU-img-2">
            <img src={CC2infoimg} alt="" />
          </div>
          <div className="PU-img-3">
            <img src={CC3infoimg} alt="" />
          </div>
        </div>
        <div className="PU-main-info">
          <div className="PU-card-img">
            <h2>Card options</h2>
            <div className="cimg">
              <img src={CC1img} alt="" />
            </div>
            <div className="cimg">
              <img src={CC2img} alt="" />
            </div>
            <div className="cimg">
              <img src={CC3img} alt="" />
            </div>
          </div>
          <div className="PU-info-1">
            <div className="PU-info">
              <h2>Card Type</h2>
              <p>Primary</p>
            </div>
            <div className="PU-info">
              <h2>Card Type</h2>
              <p>Secondary</p>
            </div>
            <div className="PU-info">
              <h2>Card type</h2>
              <p>Secondary</p>
            </div>
          </div>
          <div className="PU-info-2">
            <div className="PU-info">
              <h2>Banker</h2>
              <p>Axis Bank</p>
            </div>
            <div className="PU-info">
              <h2>Banker</h2>
              <p>Axia Bank</p>
            </div>
            <div className="PU-info">
              <h2>Banker</h2>
              <p>Axia Bank</p>
            </div>
          </div>
          <div className="PU-info-3">
            <div className="PU-info">
              <h2>Card number</h2>
              <p>**** **** **** 1234</p>
            </div>
            <div className="PU-info">
              <h2>Card number</h2>
              <p>**** **** **** 5678</p>
            </div>
            <div className="PU-info">
              <h2>Card number</h2>
              <p>**** **** **** 9101</p>
            </div>
          </div>
          <div className="PU-info-4">
            <div className="PU-info">
              <h2>Signatory</h2>
              <p>Procurement Manager</p>
            </div>
            <div className="PU-info">
              <h2>Signatory</h2>
              <p>Procurement Manager</p>
            </div>
            <div className="PU-info">
              <h2>Signatory</h2>
              <p>Procurement Manager</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentUpdates;

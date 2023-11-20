import Navbar from "./navbar";
import Footer from "./footer";
import cuimg from "../../src/assets/images/Headr/CU-img1.png";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="CU-main-img">
        <img src={cuimg} alt="" />
      </div>
      <div className="C-info">
        <div className="C-info-1">
          <div className="C-info-1-1">
            <p>Full Name</p>
            <input
              type="text"
              placeholder="Your Full Name"
              className="C-input-1"
            />
          </div>
          <div className="C-info-1-2">
            <p>Subject</p>
            <input
              type=""
              placeholder="Subject of enquiry"
              className="C-input-2"
            />
          </div>
        </div>
        <div className="C-info-2">
          <div className="C-info-2-1">
            <p>Phone Number</p>
            <input
              type="text"
              placeholder="Your Phone Number"
              className="C-input-3"
            />
          </div>
          <div className="C-info-2-2">
            <p>Enquiry Details</p>
            <input type="text" placeholder="Details" className="C-input-4" />
          </div>
        </div>
      </div>
      <div className="send-button">
        <button className="C-button">
          <p>Send</p>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

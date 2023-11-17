import CS1img from "../../src/assets/images/Headr/🦆 icon _call_.png";
import CS2img from "../../src/assets/images/Headr/🦆 icon _send_.png";

const CustomerService = () => {
  return (
    <>
      <div className="CS CS-mobile">
        <div className="CS-faq">
          <ul className="CS-faq-1">
            <li>
              <h1>FAQ</h1>
            </li>
          </ul>
          <div className="CS-faq-2">
            <ul className="CS-faq-2-2">
              <li>
                <p>Q1</p>
              </li>
              <li>
                <p>Q2</p>
              </li>
              <li>
                <p>Q3</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="CS-contact">
        <div className="contact-1">
          <div className="contact-1-text">
            <h2>Call Us</h2>
          </div>
          <div className="contact-1-img">
            <img src={CS1img} alt="" />
          </div>
        </div>
        <div className="contact-2">
          <h2>Email Us</h2>
          <div className="contact-2-img">
            <img src={CS2img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerService;

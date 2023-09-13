import logoimg from "../../src/assets/images/Headr/logo-img.svg";
import loginimg from "../../src/assets/images/Headr/login.png";
import google from "../../src/assets/images/Headr/google.png";
import facebook from "../../src/assets/images/Headr/Facebook.png";
import apple from "../../src/assets/images/Headr/apple.png";

const Register = () => {
  return (
    <div>
      <div className="logo logo-center">
        <img src={logoimg} alt="" />
        <h1>Farmscape</h1>
      </div>
      <div className="register-main">
        <div className="register-1">
          <h1>Register</h1>
          <div className="register-p">
            <p>Your Account.</p>
          </div>
          <div className="register-p-1">
            <p>Go through our Terms and Conditions</p>
            <p>
              <a href="" className="register-link">
                Terms and Conditions
              </a>
            </p>
          </div>
          <div className="register-img">
            <img src={loginimg} alt="" />
          </div>
        </div>
        <div className="register-2">
          <h2>Sign up</h2>
          <div className="register-input-container">
            <input
              type="text"
              className="register-input"
              placeholder="Enter Email"
            />
            <input
              type="text"
              className="register-input"
              placeholder="Create your username"
            />
            <input
              type="text"
              className="register-input"
              placeholder="contact number"
            />
            <input
              type="text"
              className="register-input"
              placeholder="Password"
            />
            <input
              type="text"
              className="register-input"
              placeholder="confirm password"
            />
          </div>
          <div>
            <button className="register-button">Register</button>
          </div>
          <div className="register-footer">
            <p>or you can continue with.</p>
          </div>
          <div className="register-links">
            <img src={google} alt="" />
            <img src={facebook} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

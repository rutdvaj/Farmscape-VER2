import logoimg from "../../src/assets/images/Headr/logo-img.svg";
import loginimg from "../../src/assets/images/Headr/login.png";
import google from "../../src/assets/images/Headr/google.png";
import facebook from "../../src/assets/images/Headr/Facebook.png";
import apple from "../../src/assets/images/Headr/apple.png";
import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");

  const userReg = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        regEmail,
        regPass
      );
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  };

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
              onChange={(e) => {
                setRegEmail(e.target.value);
              }}
            />
            <input
              type="text"
              className="register-input"
              placeholder="Password"
              onChange={(e) => {
                setRegPass(e.target.value);
              }}
            />
            {/* <input
              type="text"
              className="register-input"
              placeholder="confirm password"
              onChange={(e) => {
                setConfirmPass(e.target.value);
              }}
            /> */}
          </div>
          <div>
            <button className="register-button" onClick={userReg}>
              Register
            </button>
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

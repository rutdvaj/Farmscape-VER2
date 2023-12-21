import logoimg from "../../src/assets/images/Headr/logo-img.svg";
import loginimg from "../../src/assets/images/Headr/login.png";
import google from "../../src/assets/images/Headr/google.png";
import facebook from "../../src/assets/images/Headr/Facebook.png";
import apple from "../../src/assets/images/Headr/apple.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./user";
import { ID } from "appwrite";

const Loginuser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useUser();

  return (
    <div>
      <div className="logo logo-center">
        <img src={logoimg} alt="" />
        <h1>Farmscape</h1>
      </div>
      <div className="login-main">
        <div className="login-desc">
          <h1>Sign In To</h1>
          <div className="login-p">
            <p>Your Accout.</p>
            <p>
              If you don’t have an account register. You can{" "}
              <a href="">Register here.</a>
            </p>
          </div>
          <div className="login-img">
            <img src={loginimg} alt="" />
          </div>
        </div>
        <div className="login-input">
          <h2>Sign in</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Email"
              className="input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter Your Password."
              className="input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            className="login-button"
            type="submit"
            onClick={() => user.login(email, password)}
          >
            Login
          </button>
          <div className="login-footer">
            <p>Or You Can Continue With.</p>
          </div>
          <div className="links">
            <img src={google} alt="" />
            <img src={facebook} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginuser;

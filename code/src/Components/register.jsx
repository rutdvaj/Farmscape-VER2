import logoimg from "../../src/assets/images/Headr/logo-img.svg";
import loginimg from "../../src/assets/images/Headr/login.png";
import google from "../../src/assets/images/Headr/google.png";
import facebook from "../../src/assets/images/Headr/Facebook.png";
import apple from "../../src/assets/images/Headr/apple.png";
import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "./user";
import { ID } from "appwrite";
import { UserProvider } from "./user";

const Registeruser = () => {
  const user = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <UserProvider>
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
                <a
                  href=""
                  className="register-link"
                  onClick={() => navigate("Login")}
                >
                  Login
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
                type="email"
                className="register-input"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <input
                type="password"
                className="register-input"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
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
              <button
                className="register-button"
                type="button"
                onClick={() => user.register(email, password)}
              >
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
      </UserProvider>
    </div>
  );
};

export default Registeruser;

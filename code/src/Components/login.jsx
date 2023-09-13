import logoimg from "../../src/assets/images/Headr/logo-img.svg";
import loginimg from "../../src/assets/images/Headr/login.png";
import google from "../../src/assets/images/Headr/google.png";
import facebook from "../../src/assets/images/Headr/Facebook.png";
import apple from "../../src/assets/images/Headr/apple.png";

const Login = () => {
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
              placeholder="Enter Email or Username"
              className="input"
            />
            <input
              type="text"
              placeholder="Enter Your Password."
              className="input"
            />
          </div>
          <div>
            <button className="login-button">Login</button>
          </div>
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

export default Login;

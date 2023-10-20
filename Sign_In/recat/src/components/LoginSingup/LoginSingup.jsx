import React, { useState } from "react";
import "./LoginSingup.css";

// import user_icon from "../Assets/user_icon.jpg";
// import email_icon from "../Assets/email_icon.jpg";
// import password from "../Assets/password_icon.jpg";

const LoginSingup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">
          {action}
        </div>
        <div className="underline" />
      </div>
      <div className="inputs">
        {action === "Login"
          ? <div />
          : <div className="input">
              <i className="bi bi-person-fill"/>
              <input type="text" placeholder="Name" />
            </div>}

        <div className="input"> 
          <i className="bi bi-envelope-fill"/>
          <input type="email" name="" id="" placeholder="Email Id" />
        </div>
        <div className="input">
        <i className="bi bi-lock"/>
          <input type="password" name="" id="" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up"
        ? <div />
        : <div className="forget-password">
            Lost Password? <span>Click Here!</span>
          </div>}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;

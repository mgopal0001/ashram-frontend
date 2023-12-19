import React, { useState } from "react";
import "./style.css";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(INITIAL_STATE);

  return (
    <>
      <div className="login-con">
        <div className="login-text">LOGIN</div>
        <div className="form-con">
          <div className="input-items-con">
            <div className="email-con">
              Email
              <input
                type="email"
                placeholder="example@yourmail.com"
                className="input-email"
              />
            </div>
            <div className="password-con">
              Password
              <input
                type="password"
                className="input-password"
                placeholder="password"
              />
            </div>
          </div>
          <div className="submit-con">
            <button className="button-87">LOGIN</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import "../Sass/LoginComponent.scss";
import { LoginAPI } from "../api/AuthApi";
import LinkedinLogo from "../assets/linkedinLogo.png";

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='login-wrapper'>
      <img src={LinkedinLogo} className="linkedinLogo" />
      <h1 className="heading">Sign in</h1>
      
      <div className="auth-inputs">
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
          className="common-input"
          type="text"
          placeholder="Enter your email"
        />
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
          className="common-input"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <button onClick={login} className="login-btn">
        Log in to linkedin
      </button>
    </div>
  );
}

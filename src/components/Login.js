import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import logo from "./logo-color.png";
import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <img src={logo} height="180" width="180"></img>
        <h2>Welcome to AviChat!</h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          Sign In with <GoogleOutlined />
        </div>
        <br /> <br />
        <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          Sign In with <FacebookOutlined />
        </div>
      </div>
    </div>
  );
};
export default Login;

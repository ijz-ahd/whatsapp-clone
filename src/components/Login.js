import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import "./login.css";

function Login() {
  const [{}, dispatch] = useStateValue();
  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="whatsapp logo"
        />
        <div className="login_text">
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button onClick={handleSignIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import SignUp from "../../components/Signup/SignUp";
import SignIn from "../../components/SignIn/SignIn";
import "./auth.styles.scss";
const Auth = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;

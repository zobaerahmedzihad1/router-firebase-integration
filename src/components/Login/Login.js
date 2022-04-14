import React from "react";
import "./Login.css";
import useFirebase from '../../Hooks/useFirebase'

const Login = () => {
const {signInWithGoogle} = useFirebase()
  return (
    <>
      <div className="login-heading">
        <h2>Pleaser login</h2>
        <button className="google-login"  onClick={signInWithGoogle}>
          Google Sign In
        </button>
      </div>
      <form className="form-input">
        <input type="email" placeholder="Enter Your Email" />
        <input type="password" placeholder="Enter Your Password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;

import React from "react";
import "./Login.css";
// import useFirebase from '../../Hooks/useFirebase'
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  // const {signInWithGoogle} = useFirebase()
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate()
  const location = useLocation()

  const from = location?.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(()=>{
      navigate(from, {replace: true})
    })
  };

  return (
    <>
      <div className="login-heading">
        <h2>Pleaser login</h2>
        <button className="google-login" onClick={handleGoogleSignIn}>
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

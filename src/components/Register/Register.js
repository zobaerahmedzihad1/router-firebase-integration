import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <h2 className="register-heading">Pleaser Register</h2>
      <form className="form-input">
        <input type="email" placeholder="Enter Your Email" />
        <input type="password" placeholder="Enter Your Password" />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;

import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <h2>Please Register!!</h2>
      <br />
      <button>Register using Google</button>
      <br /><br />
      <form action="">
        <input type="text" placeholder="Your Name" required />
        <br />
        <input type="email" placeholder="Your Email" required />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <input type="submit" value="Register" />
        <br />
      </form>
    </div>
  );
};

export default Register;

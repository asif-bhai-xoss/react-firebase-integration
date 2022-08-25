import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";
import "./Login.css";

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";


  const handleSignInWithGoogle = () => {
    signInWithGoogle()
    .then(() => {
      navigate(from, {replace: true});
    })
  }
  return (
    <div className="login">
      <h2>Please Login!!</h2>
      <br />
      <button onClick={handleSignInWithGoogle}>Google Sign in</button>
      <br /><br />
      <form action="">
        <input type="email" placeholder="Your Email" required />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <input type="submit" value="Login" />
        <br />
      </form>
    </div>
  );
};

export default Login;

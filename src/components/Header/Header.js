import { getAuth, signOut } from "firebase/auth";
import React from "react";
import Button from 'react-bootstrap/Button';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import "./Header.css";

const auth = getAuth(app);
const Header = () => {
  // const {user, handleSignOut} = useFirebase();
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
  }
  return (
    <div className="header">
      <nav>
        <Button variant="primary">Primary</Button>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>
        <span>{user?.uid && user?.displayName}</span>
        {
          user?.uid ? 
          <button onClick={handleSignOut}>Sign Out</button>
          :
          <Link to="/login">Login</Link>
        }
      </nav>
    </div>
  );
};

export default Header;

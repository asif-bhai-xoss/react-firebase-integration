/*
* First go to this website:
https://github.com/CSFrequency/react-firebase-hooks


*** For google sign in starts ***

import { getAuth } from "firebase/auth";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from "../../firebase.init";

const auth = getAuth(app);

----(inside main function)----

const Login = () => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  return (
    <div>
        <button onClick={() => signInWithGoogle()}>Google Sign in</button>
    </div>
    
)

*** For google sign in ends ***
--------------------------------------------------------------------------
*** For google sign out starts ***

import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

----(inside main function)----

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="header">
      <nav>
        <span>{user?.uid && user?.displayName}</span>
        {
          user?.uid ? 
          <button onClick={() => signOut(auth)}>Sign Out</button>
          :
          <Link to="/login">Login</Link>
        }
      </nav>
    </div>
)
*** For google sign out ends ***
--------------------------------------------------------------------------
*** to get the current user ***
const auth = getAuth(app)
const [user] = useAuthState(auth);
console.log(user?.displayName);

--------------------------------------------------------------------------
*** To get current location using react router ***
import { useLocation } from 'react-router-dom';

const location = useLocation();
console.log(location.href);
console.log(location.origin);

--------------------------------------------------------------------------
*** To navigate to another page using react router ***
import { Navigate } from 'react-router-dom';

<Navigate to="./login" state={{from: location}} replace></Navigate>

--------------------------------------------------------------------------
*** Login chara dhuka jabena page e ***
1. First create a component named "RequireAuth"

import { Navigate, useLocation } from 'react-router-dom';

const auth = getAuth(app);

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

2. Now wrap the route that you want to hide without login

<Route path="/orders" element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
}>
</Route>

3. Finally, in login.js

import { useLocation, useNavigate } from "react-router-dom";

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
      <button onClick={handleSignInWithGoogle}>Google Sign in</button>
    </div>
  );
};

--------------------------------------------------------------------------



*/
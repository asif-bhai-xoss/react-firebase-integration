import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    //const [error, setError] = useState("");
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const newUser = result.user;
            setUser(newUser);
            console.log(user.displayName);
        })
        .catch(error => console.error(error.message))
        
    }
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {})
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    },[])
    return {user, signInWithGoogle, handleSignOut};
}

export default useFirebase;
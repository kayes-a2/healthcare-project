//import  & react external node pakage

import initializeAuthentication from "../../Firebase/firebase.init";
import {
    getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged
} from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();

//arrow function
const useFirebase = () => {

    const [user, setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            });
    };

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);


    return {
        user,
        signInUsingGoogle,
        logout

    };
}

//export usefirebase custom hook component
export default useFirebase;
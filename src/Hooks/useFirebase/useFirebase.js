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
    const [isloading, setIsloading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const signInUsingGoogle = () => {
        setIsloading(true);

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .finally(() => setIsloading(false));
    };

    const logout = () => {
        setIsloading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsloading(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsloading(false)
        });
        return () => unsubscribe;
    }, [auth]);


    return {
        user,
        isloading,
        signInUsingGoogle,
        logout

    };
}

//export usefirebase custom hook component
export default useFirebase;
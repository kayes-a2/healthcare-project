//import react external node pakage

import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase/useFirebase';

//creact context 
export const AuthContext = createContext();

//arrow function 
const AuthProvider = ({ children }) => {

    //use custom hook 
    const allContext = useFirebase();
    return (
        //use context
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

//export authprovider component
export default AuthProvider;
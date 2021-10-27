//import component's & react external node pakage

import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth/useAuth';

//private component arrow function redirect
const PrivateRoute = ({ children, ...rest }) => {
    //use auth context custom hook
    const { user, isloading } = useAuth();
    if (isloading) {
        return <Spinner animation="border" variant="dark" />
    }
    return (
        //full privateroute redirect part of html (jsx) 
        <Route
            {...rest}
            render={({ location }) => user.email ?
                children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}
        >

        </Route>
    );
};

//export privateroute component
export default PrivateRoute;
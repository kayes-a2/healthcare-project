//import component's & react external node pakage

import React from 'react';
import { NavLink } from 'react-router-dom';
import Email from './Email';

//login component arrow function
const Login = () => {
    return (
        //full login part of html (jsx) and inside of home email component data pass

        <div>
            <Email></Email>
            <div className="flex ">



                <NavLink className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto mb-7" to="/register">New User?</NavLink>
            </div>

            {/* <p className="text-center text-gray-500 text-xs">
                &copy;2021 Medication. All rights reserved.
            </p> */}
        </div>
    );
};

//export login component
export default Login;
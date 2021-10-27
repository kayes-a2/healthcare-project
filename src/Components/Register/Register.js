//import component's & react external node pakage

import React from 'react';
import { NavLink } from 'react-router-dom';
import Email from '../Login/Email';

//register component arrow function
const Register = () => {
    return (
        //full register part of html (jsx) and inside of home email component data pass
        <div>
            <Email></Email>
            <div className="flex ">



                <NavLink className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto mb-7" to="/login">Already Registered?</NavLink>
            </div>

            {/* <p className="text-center text-gray-500 text-xs">
                &copy; 2021 Medication.All rights reserved.</p> */}

        </div>
    );
};

//export register component
export default Register;
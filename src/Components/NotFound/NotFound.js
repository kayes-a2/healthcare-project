//import component's & react external node pakage

import React from 'react';
import img from '../../Images/download (8).png'

//notfound component arrow function
const NotFound = () => {
    return (
        //full notfound part of html (jsx) 
        <div>
            <h2 className="text-red-600 text-center my-7 text-3xl font-bold">Please Search Again With Valid Path -_-</h2>
            <img className=" mx-auto w-96" src={img} alt="" />

        </div>
    );
};

export default NotFound;
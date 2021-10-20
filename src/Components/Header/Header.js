import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=" font-bold pl-3 pb-3 pt-3 py-4 bg-gray-500 flex">
            <img className="h-16 w-16 flex items-center justify-center rounded-full" src="https://i.pinimg.com/originals/ec/08/47/ec084792936091f4da0dd3f6101713f2.jpg" alt="" />
            <h1 className="text-4xl ml-6 mt-2 text-white">Medications  </h1>
            <input className="my-4 ml-16 w-96  rounded p-1" type="text" placeholder="search your medicine" />

            <div className=" ml-8 mt-3">
                <NavLink to="/home">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Home</button>
                </NavLink>
                <NavLink to="/contact">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Contact</button>
                </NavLink>

                {/* <NavLink to="/course">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Course</button>
                </NavLink> */}

                {/* <NavLink to="/about">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">About</button>
                </NavLink> */}

                <NavLink to="/service">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Service</button>
                </NavLink>


            </div>


        </div>
    );
};

export default Header;
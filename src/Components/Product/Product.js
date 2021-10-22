import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    const { name, image, price, description, id } = props.medicine
    return (
        <div>
            <div className="max-w-sm h-96 overflow-hidden shadow-lg m-4 mx-auto rounded-lg pt-5 bg-gray-300 ">
                <div className="cart-image text-center">
                    <img className="mx-auto h-32 w-80 rounded-lg" src={image} alt="" />
                </div>

                <div className="px-6 py-4 text-center ">
                    <h2 className=" font-bold">Name :<span className=" text-xl font-bold mb-2"> {name} </span></h2>

                    <h2 className=" font-bold">Price : <span className="font-bold text-xl mb-2"> ${price} </span></h2>

                    <p><span className="font-bold text-xl mb-2"> Description : </span>{description}</p>
                    <NavLink to={`/buying/${id}`}>
                        <button className=" text-xl bg-black text-white rounded-lg p-1 my-4">Buy Now</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Product;
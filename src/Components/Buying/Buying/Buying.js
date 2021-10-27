//import component's & react external node pakage

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//buying component arrow function
const Buying = () => {

    //useing state
    const [services, setServices] = useState([]);

    //using sideeffect 
    useEffect(() => {
        fetch('/fakedb.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    //daynamic route 
    const { medicineId } = useParams();
    console.log(medicineId)


    const service = services.find(serv => serv.id === +medicineId)
    console.log(service)
    return (
        //full buying part of html (jsx) 
        <div>
            {/* <h1 className="text-5xl font-bold text-center">this is booking{medicineId}</h1> */}
            <h1 className="text-5xl font-bold text-center text-green-500 my-4">Product Details</h1>
            <div className="max-w-sm   overflow-hidden shadow-lg m-4 mx-auto rounded-lg pt-5 bg-gray-300 ">
                <div className="cart-image text-center">
                    <img className="mx-auto h-56 w-72 rounded-lg" src={service?.image} alt="" />
                </div>

                <div className="px-6 py-4 text-center ">
                    <h2 className=" font-bold">Name :<span className=" text-xl font-bold mb-2"> {service?.name} </span></h2>

                    <h2 className=" font-bold">Price : <span className="font-bold text-xl mb-2"> ${service?.price} </span></h2>

                    <p><span className="font-bold text-xl mb-2"> Description : </span>{service?.descriptions}</p>
                </div>
            </div>
        </div>
    );
};

//export buying component
export default Buying;
//import component's & react external node pakage

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//buying component arrow function
const Buying = () => {

    //daynamic route 
    const { medicineId } = useParams();
    console.log(medicineId)

    //useing state
    const [owshod, SetOwshod] = useState({});

    //using sideeffect 
    useEffect(() => {
        // const url = `../../../../public/fakedb.JSON/${medicineId}`;
        fetch(`./fakedb.json/${medicineId}`)
            .then(res => res.json())
            .then(data => SetOwshod(data));
    }, []);

    return (
        //full buying part of html (jsx) 
        <div>
            <h1 className="text-6xl text-center">this is booking{medicineId}</h1>
            <div className="max-w-sm h-96 overflow-hidden shadow-lg m-4 mx-auto rounded-lg pt-5 bg-gray-300 ">
                <div className="cart-image text-center">
                    <img className="mx-auto h-32 w-80 rounded-lg" src={owshod.image} alt="" />
                </div>

                <div className="px-6 py-4 text-center ">
                    <h2 className=" font-bold">Name :<span className=" text-xl font-bold mb-2"> {owshod.name} </span></h2>

                    <h2 className=" font-bold">Price : <span className="font-bold text-xl mb-2"> ${owshod.price} </span></h2>

                    <p><span className="font-bold text-xl mb-2"> Description : </span>{owshod.descriptions}</p>
                </div>
            </div>
        </div>
    );
};

//export buying component
export default Buying;
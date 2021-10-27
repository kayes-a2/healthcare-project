//import component's & external css & react external node pakage

import React from 'react';
import useMedicine from '../../hooks/Medicine/useMedicine';
import Product from '../Product/Product';
import './Home.css'

//home component arrow function
const Home = () => {
    //use coustom hook
    const { medicines, setMedicines } = useMedicine();

    return (
        //full home part of html (jsx) 
        <div>
            <div className="">
                <div className="flex mb-5">
                    <img className="home-img mx-auto" src="https://image.shutterstock.com/image-vector/pharmacy-store-concept-vector-infographic-260nw-1388104772.jpg" alt="" />
                </div>

            </div>
            <div id="medicine">
                <h2 className="text-5xl font-bold text-center mb-3">Medicine's</h2>
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 mb-5">

                    {
                        medicines.map(medicine => <Product key={medicine.id} medicine={medicine}></Product>)
                    }
                </div>
            </div>

            <h2 className="text-5xl font-bold text-center mb-3 text-red-500"> Oxyzen </h2>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                <img className="oxyzen m-4 mt-6" src="https://image.shutterstock.com/image-photo/closeup-medical-oxygen-flow-meter-260nw-1318811957.jpg" alt="" />
                <h2 className="text-4xl font-bold ml-10 m-4 mt-8 text-gray-500">We provide Emergency Oxygen by our transport. Coustomer is our family.</h2>
            </div>


            <h2 className="text-5xl font-bold text-center mb-3 text-red-500">Amblunce</h2>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                <h2 className="text-4xl font-bold ml-10 m-4 mt-8 text-gray-500">
                    We provide Emergency Ambulence service with all advance equipment  support for patient.
                </h2>

                <img className="ambulence mt-6" src="https://media.gettyimages.com/photos/ambulance-picture-id1055097788?s=612x612" alt="" />
            </div>

        </div>
    );
};

//export home component
export default Home;
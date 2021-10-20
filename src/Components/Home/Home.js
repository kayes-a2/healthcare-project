import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="">

                <div className="flex">
                    <img className="home-img mx-auto" src="https://image.shutterstock.com/image-vector/pharmacy-store-concept-vector-infographic-260nw-1388104772.jpg" alt="" />

                    {/* <img className="home-img text-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfgOMbVyv7YIAjoUtm2wZqVNQqHiU6gN0Lw&usqp=CAU" alt="" /> */}
                </div>

                {/* <img src="https://cms-contents.pharmeasy.in/banner/0d4d2e4bc31-DWEBSUPR25.jpg?dim=1440x0&dpr=1.5&q=100" alt="" />

                <img src="https://www.banglameds.com.bd/media/baner/1584343752084.jpg" alt="" /> */}
            </div>
        </div>
    );
};

export default Home;
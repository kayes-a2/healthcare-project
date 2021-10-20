import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-400 p-20">
                <h2 className="text-2xl text-center mb-10 font-bold ">Your own pharmacy. Next to your door.</h2>
                <div className="  grid grid-cols-4">


                    <div className="">
                        <h2 className="font-bold text-xl mb-3">Feadback</h2>
                        <h2 className="">Very fast and good customer service by Medications. The price of medicine is also very good as compare to other online medicine order platform. I am very happy to have Medications as my all time medicine friend. Medications delivery service is very good because they deliver the medicines within 48hrs.
                        </h2>
                    </div>

                    <div className="ml-36 ">
                        <h2 className="text-xl font-bold mb-3">Contact Us</h2>
                        <h2 className="">Call : 1-800-2690</h2>
                        <h2 className="">Plot : 3/B, 4th Floor, Rd 16/A, Dhanmondi</h2>
                        <h2 className="">Location : Dhaka,Bangladesh</h2>
                    </div>
                    <div className=" ml-32">
                        <h2 className="font-bold text-xl mb-3">Top Sell's</h2>
                        <h2>First Aid</h2>
                        <h2>Paracetamol</h2>
                        <h2>Saline (or/water)</h2>
                        <h2>Sanitizer</h2>
                    </div>
                    <div className="text-xl ml-24 ">

                        <h2 className="font-bold mb-3">Social Media Link's</h2>

                        <div className="text-white mb-3">
                            <a className="text-blue-800 " href="https://www.facebook.com/k.kayesalazad/">facebook</a><br />
                            <a className="text-purple-800" href="https://www.instagram.com/kayes_a2/">instagram</a><br />
                            <a className=" text-blue-800" href="https://www.linkedin.com/in/kayes-al-azad-3b8579216/">linkedin</a><br />
                            <a className=" text-blue-600"
                                href="https://mobile.twitter.com/kayes_a2?fbclid=IwAR2E-w_qxej-o6_QWrbvZ_ADA4tJfnJYdB2IqA2GtzItJL9AEhqrvmKwKCw">twitter
                            </a>
                        </div>
                    </div>
                </div>
                <p className="mt-10 text-center ">Copyright © Medications 2021</p>
            </div>

        </div>
    );
};

export default Footer;
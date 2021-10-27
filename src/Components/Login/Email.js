//import component's & react external node pakage

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from "../../hooks/useAuth/useAuth";

//email component arrow function
const Email = () => {

    //use auth context custom hook
    const { signInUsingGoogle } = useAuth();

    //useing state
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState('');


    const auth = getAuth();



    const handleRegestation = e => {
        e.preventDefault();
        console.log(email, pass);

        if (isLogin) {
            processLogin(email, pass);
        }
        else {
            registerNewUser(email, pass);
        }

    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPass(e.target.value);
    }
    const togoleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const handleName = e => {
        setName(e.target.value);
    }

    const processLogin = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const registerNewUser = (email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }


    return (
        //full email part of html (jsx) 
        <>
            <div class="w-full max-w-xs mx-auto">
                <h1 className="text-center mt-4 text-2xl font-bold mt-10 text-red-500">Please {isLogin ? 'Login' : 'Register'}!</h1>

                <form onSubmit={handleRegestation} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">

                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">

                        </label>
                        <input onBlur={handleName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Name" required />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input onBlur={handleEmailChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter email" required />
                    </div>
                    <div class="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input onBlur={handlePasswordChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" required />
                        <p className="text-red-500 text-xs italic">Please choose a password. We'll never share your email with anyone else.</p>
                    </div>
                    <Form.Group onChange={togoleLogin} className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Already Registered ?" />
                    </Form.Group>
                    <div className="text-danger mb-3">{error}</div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " onClick={signInUsingGoogle}>Google Singin</button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs my-4">
                    &copy;2021 Medication. All rights reserved.
                </p>
            </div>

        </>
    );
};

//export email component
export default Email;
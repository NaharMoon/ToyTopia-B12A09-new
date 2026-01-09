import { signInWithEmailAndPassword, } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { auth, } from '../firebase/firebase.config';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import teddyPinkBg from "../assets/teddyPinkBg.jpg";
import FringeDesign from '../components/FringeDesign';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
    useEffect(() => {
        document.title = "ToyTopia | Login";
    }, []);

    const { handleGoogleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userData = {
        email,
        password,
    }
    // console.log(userData);


    const handleLogin = (e) => {
        e.preventDefault();
        // console.log("Login form submitted successfully");
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log("Email: ", email, "\nPassword: ", password);

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // const user = result.user;
                // console.log("Login successed: ", user);
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    // const handleGoogleSignIn = () => {
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             const user = result.user;
    //             console.log("Google User: ", user);
    //             navigate(`${location.state ? location.state : "/"}`);
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         })
    // }

    return (
        <div className='bg-[#f6c1cc]'
            style={{
                backgroundImage: `url("${teddyPinkBg}")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="relative -top-3">
                <FringeDesign></FringeDesign>
            </div>
            <div className="min-h-screen md:ml-50 pt-10 mx-6">
                <h1 className="card-body text-secondary text-5xl font-bold pl-0">Please Login!</h1>
                <div className="">
                    <div className="card lg:bg-[#f6c1cc] md:w-100 shrink-0 shadow-2xl hover:scale-105 transition-all duration-500">
                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">
                                {/* email */}
                                <label className="label font-black">Email</label>
                                <input
                                    type="email"
                                    className="border-2 p-2 rounded-md border-secondary"
                                    placeholder="Email"
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                {/* password */}
                                <label className="label font-black">Password</label>
                                <input
                                    type="password"
                                    className="border-2 p-2 rounded-md border-secondary"
                                    placeholder="Password"
                                    name='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />

                                <div>
                                    <Link to={`/auth/forgot-password?email=${encodeURIComponent(email)}`}
                                        className="link link-hover"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <button className="btn btn-secondary mt-4 text-primary">Login</button>
                                <p className='text-center'>Don't have an account? <Link to={"/auth/register"}> <span className='hover:link'>Register</span> </Link></p>
                            </fieldset>
                        </form>
                        <div className="card-body mt-0 pt-0">
                            <p className='text-center'>___________or continue with___________</p>
                            <button
                                onClick={handleGoogleSignIn}
                                className="btn btn-secondary mt-4 text-primary"
                            >
                                <FcGoogle /> LogIn With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
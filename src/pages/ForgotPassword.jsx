import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { auth } from '../firebase/firebase.config';
import teddyPinkBg from "../assets/teddyPinkBg.jpg"
import FringeDesign from '../components/FringeDesign';

const ForgotPassword = () => {
    useEffect(() => {
        document.title = "ToyTopia | Forgot Password?";
    }, []);


    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState('');
    // console.log(email);

    useEffect(() => {
        const fillEmail = searchParams.get("email") || "";
        if (fillEmail) {
            setEmail(fillEmail);
        }
    }, [searchParams]);
    const handleResetPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // console.log("Password reset email sent. Check your email: ",email);
                window.location.href = "https://mail.google.com";
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    return (
        <div
            className='bg-[#f6c1cc]'
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
                <h1 className="card-body text-secondary text-5xl font-bold pl-0">Forgot Password? </h1>
                <div className="card lg:bg-[#f6c1cc] md:w-100 shrink-0 shadow-2xl hover:scale-105 transition-all duration-500">
                    <form onSubmit={handleResetPassword} className="card-body">
                        <fieldset className="fieldset">
                            {/* email */}
                            <label className="label font-black">Email</label>
                            <input
                                type="email"
                                className="border-2 p-2 rounded-md border-secondary focus:outline-2 focus:outline-accent"
                                placeholder="Email"
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button className="btn btn-secondary mt-4 text-primary">Reset</button>
                            <div ><Link to={"/auth/login"}
                                className="link link-hover"
                            >
                                Back to Login</Link></div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
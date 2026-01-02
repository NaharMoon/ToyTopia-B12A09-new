import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { auth } from '../firebase/firebase.config';

const ForgotPassword = () => {
    
    const [searchParams] = useSearchParams();
    const [email,setEmail] = useState('');
    console.log(email);

     useEffect(()=>{
        const fillEmail = searchParams.get("email") || "";
        if(fillEmail){
            setEmail(fillEmail);
        }
     },[searchParams]);
    const handleResetPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth,email)
        .then(() => {
            console.log("Password reset email sent. Check your email: ",email);
            window.location.href = "https://mail.google.com";
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <h1>ForgotPassword</h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleResetPassword} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className="btn btn-neutral mt-4">Reset</button>
                        <p>Back to <Link to={"/auth/login"}>~Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
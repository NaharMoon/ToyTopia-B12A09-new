import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.config';

const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const userData = {
        email,
        password,
    }
    console.log(userData);

    const handlePasswordOnChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (value.length < 6) {
            setError("Password must be at least 6 characters");
        }
        else if (!/[A-Z]/.test(value)) {
            setError("Password must contain an uppercase letter");
        }
        else if (!/[a-z]/.test(value)) {
            setError("Password must contain a lowercase letter");
        }
        else {
            setError(""); // সব ঠিক
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Register form submitted successfully");
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("Email: ", email, "\nPassword: ", password);

        if (error) {
            alert("Password must contain uppercase, lowercase and at least 6 characters");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log("Register successed: ", user);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
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
                                />
                                {/* password */}
                                <label className="label">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="input"
                                    placeholder="Password"
                                    name='password'
                                    value={password}
                                    onChange={handlePasswordOnChange}
                                    required
                                />
                                <button
                                    type='button'
                                    className='btn'
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? "hide" : "show"}
                                </button>
                                {error && <p>{error}</p>}
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
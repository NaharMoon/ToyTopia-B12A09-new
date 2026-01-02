import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const RegisterPage = () => {

    const { handleGoogleSignIn } = useContext(AuthContext);
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

                                {/* Name */}
                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Your Name"
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
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

                                {/* photoURL */}
                                <label className="label">Photo URL</label>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Photo URL"
                                    name='photo'
                                    // value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                />

                                <button className="btn btn-neutral mt-4">Register</button>
                                <p>Already have an account? <Link to={"/auth/login"}>Login</Link></p>

                            </fieldset>
                        </form>
                        <p>______________or continue with______________</p>
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-neutral mt-4"
                        >
                            LogIn With Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
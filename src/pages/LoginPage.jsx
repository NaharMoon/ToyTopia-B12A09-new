import { signInWithEmailAndPassword, } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { auth, } from '../firebase/firebase.config';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
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
                const user = result.user;
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
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
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
                                {/* password */}
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    className="input"
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
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p>Don't have an account? <Link to={"/auth/register"}>~Register</Link></p>
                            </fieldset>
                        </form>
                        <p>___________or continue with___________</p>
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

export default LoginPage;
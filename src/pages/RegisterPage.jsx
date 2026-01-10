import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import teddyPinkBg from "../assets/teddyPinkBg.jpg";
import FringeDesign from '../components/FringeDesign';
import { FcGoogle } from 'react-icons/fc';
import { PiEyeClosed, PiEyeDuotone } from 'react-icons/pi';
import { FaEye } from 'react-icons/fa';
import { VscEye } from 'react-icons/vsc';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    useEffect(() => {
        document.title = "ToyTopia | Register";
    }, []);


    const { handleGoogleSignIn, navigate, location } = useContext(AuthContext);
    // console.log(location);
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const userinfo = {
        email,
        password,
    }
    const profile = {
        displayName: name,
        photoURL: photoURL,
    }
    // console.log("UserInfo: ", userinfo, "\nProfile: ", profile);

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
        // console.log("Register form submitted successfully");
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log("Email: ", email, "\nPassword: ", password);

        if (error) {
            alert("Password must contain uppercase, lowercase and at least 6 characters");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                // console.log("Register successed: ", user);
                navigate(`${location.state ? location.state : "/"}`);
                toast.success("Registration Successfull!");
            })
            .catch((error) => {
                console.log(error.message);
                toast.error(error.message);
            });

        // handleUpdateProfile(e,profile);
    };

    return (
        <div className='bg-[#f6c1cc]'
            style={{
                backgroundImage: `url("${teddyPinkBg}")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="sticky top-16 h-fit -translate-y-3">
                <FringeDesign></FringeDesign>
            </div>
            <div className="min-h-screen md:ml-50 pt-10 mx-6 pb-6">
                <h1 className="card-body text-secondary text-5xl font-bold pl-0">Get in touch!</h1>
                <div className="">
                    <div className="card lg:bg-[#f6c1cc] md:w-100 max-w-sm shrink-0 shadow-2xl 
                    hover:scale-105 transition-all duration-500
                    hover:shadow-[0_20px_60px_rgba(246,193,204,0.6)]">
                        <form onSubmit={handleRegister} className="card-body">
                            <fieldset className="fieldset">

                                {/* Name */}
                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    className="border-2 p-2 rounded-md border-secondary"
                                    placeholder="Your Name"
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {/* email */}
                                <label className="label">Email</label>
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
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="border-2 p-2 rounded-md border-secondary w-full"
                                        placeholder="Password"
                                        name='password'
                                        value={password}
                                        onChange={handlePasswordOnChange}
                                        required
                                    />
                                    <button
                                        type='button'
                                        className='absolute right-4 top-3'
                                        onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <PiEyeClosed size={16} /> : <VscEye size={16} />}
                                    </button>
                                    {error && <p className='text-error'>{error}</p>}
                                </div>


                                {/* photoURL */}
                                <label className="label">Photo URL</label>
                                <input
                                    type="text"
                                    className="border-2 p-2 rounded-md border-secondary"
                                    placeholder="Photo URL"
                                    name='photo'
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                />

                                <button className="btn btn-neutral mt-4 text-primary">Register</button>
                                <p className='text-center'>Already have an account? <Link to={"/auth/login"}><span className='hover:link'>Login</span></Link></p>

                            </fieldset>
                        </form>
                        <div className="card-body mt-0 pt-0">
                            <p className='text-center'>___________or continue with___________</p>
                            <button
                                onClick={handleGoogleSignIn}
                                className="btn btn-neutral mt-4 text-primary"
                            >
                                <FcGoogle size={22} /> LogIn With Google
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
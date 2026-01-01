import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router';
// import { AuthContext } from './context/AuthContext';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

    const {userData,setUserData} = useContext(AuthContext);
    console.log(userData);

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign-out Successfull.");
                setUserData('');
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to={"/auth/login"}>Login</Link></li>
                        <li><Link to={"/auth/register"}>Register</Link></li>
                        <li><Link to={"/auth/profile"}>Profile</Link></li>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl">Home</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/auth/login"}>Login</Link></li>
                    <li><Link to={"/auth/register"}>Register</Link></li>
                    <li><Link to={"/auth/profile"}>profile</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !userData ?
                        <Link className='btn' to={"/auth/login"}>Login</Link>
                        :
                        <Link className='btn' onClick={handleLogOut}>logOut</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
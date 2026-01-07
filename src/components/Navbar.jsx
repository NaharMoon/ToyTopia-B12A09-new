import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
// import { AuthContext } from './context/AuthContext';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from '../context/AuthContext';
import userIcon from '../assets/user-icon.png'

const Navbar = ({children}) => {
    const navigate = useNavigate();
    const links = <>
        <li><NavLink to={"/"}>Home     </NavLink></li>
        <li><NavLink to={"/all-toys"}>All Toys     </NavLink></li>
        {/* <li><NavLink to={"/auth/login"}>Login      </NavLink></li>
        <li><NavLink to={"/auth/register"}>Register</NavLink></li> */}
        <li><NavLink to={"/auth/profile"}>Profile  </NavLink></li>
    </>

    const { userData, setUserData } = useContext(AuthContext);
    // console.log(userData);

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                // console.log("Sign-out Successfull.");
                setUserData('');
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    return (
        <div className="">
            <div className="navbar shadow-none pb-0 bg-secondary  lg:pr-20 lg:pl-20">
                {/* rounded-tl-3xl rounded-tr-3xl */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost text-3xl font-extrabold text-baloo text-primary">ToyTopia</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <img className='w-10 rounded-full'
                        src={userData ? userData.photoURL : userIcon} alt="user icon" title='Name:' />
                    {
                        !userData ?
                            <Link to={"/auth/login"} className='btn btn-primary text-white border-none rounded-full pl-6 pr-6'>Login</Link>
                            :
                            <Link className='btn btn-primary text-white border-none rounded-full pl-6 pr-6' onClick={handleLogOut}>logOut</Link>
                    }
                </div>
            </div>
            <div className="relative -top-2">
            {children}
            </div>
        </div>
    );
};

export default Navbar;
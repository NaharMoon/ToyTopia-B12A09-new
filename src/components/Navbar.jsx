import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from '../context/AuthContext';
import userIcon from '../assets/user-icon.png'
import { toast } from 'react-toastify';

const Navbar = ({ children }) => {
    const navigate = useNavigate();
    const links = <>
        <li><NavLink to={"/"}>Home     </NavLink></li>
        <li><NavLink to={"/all-toys"}>All Toys     </NavLink></li>
        <li><NavLink to={"/auth/profile"}>Profile  </NavLink></li>
    </>

    const { userData, setUserData } = useContext(AuthContext);
    // console.log(userData);

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                // console.log("Sign-out Successfull.");
                setUserData('');
                navigate(`${location.state ? location.state : "/"}`);
                toast("You have Logged Out!");
            })
            .catch((error) => {
                console.log(error.message);
                toast.error(error.message);
            })
    }
    return (
        <div className="sticky top-0 h-fit z-10">
            <div className="navbar shadow-none pb-0 bg-secondary  lg:pr-20 lg:pl-20 z-10 ">
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
                    <Link to={"/"} className="btn btn-ghost text-3xl font-extrabold text-baloo bg-linear-to-l from-primary to-orange-400 bg-clip-text text-transparent ">ToyTopia</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3 group">
                    <div className="relative">
                    <img className='w-10 rounded-full'
                        src={userData.photoURL ? userData.photoURL : userIcon} alt="user icon" />
                    {/* invisible user info */}
                    <div className="absolute p-2 bg-primary-content rounded-xl text-xs z-10 -left-10 invisible group-hover:visible">
                        {
                            userData ?
                                (<>
                                    <p className="">{userData?.displayName && userData.displayName}</p>
                                    <p className="">{userData?.email && userData.email}</p>
                                </>)
                                :
                                <pre className="">Please Login or Register.</pre>
                        }
                    </div>

                    </div>
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
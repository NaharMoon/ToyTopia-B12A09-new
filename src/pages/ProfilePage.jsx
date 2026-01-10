import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast, ToastContainer } from 'react-toastify';
import decorCardBrown from "../assets/decorCardBrown.jpg";
import decorCardBlue from "../assets/decorCardBlue.jpg";
import profileBg1 from '../assets/profileBg1.jpg';
import profileBg2Vec from "../assets/profileBg2Vec.png";
import teddyPinkBg from "../assets/teddyPinkBg.jpg"
import FringeDesign from '../components/FringeDesign';

const ProfilePage = () => {
    useEffect(() => {
        document.title = "ToyTopia | Profile";
    }, []);

    const { userData, setUserData } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const user = auth.currentUser;
    // console.log(user);

    const profile = {
        displayName: name,
        photoURL: photoURL,
    }
    // console.log(profile);
    // console.log(userData);

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        updateProfile(auth.currentUser, profile)
            .then(() => {
                setUserData({
                    ...userData,
                    displayName: auth.currentUser.displayName,
                    photoURL: auth.currentUser.photoURL,
                });
                toast.success("Profile Updated.");
                // console.log("Profile Updated.");
            })
            .catch((error) => {
                console.log(error.message);
            })
    };

    return (
        <div className="bg-[#f6c1cc]">
            <div className='pb-10'
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
                <div className="min-h-screen md:ml-50 px-6 mx-auto">
                    <div className="max-w-100"
                    // style={{
                    //     backgroundImage: `url("${profileBg1}")`,
                    //     backgroundSize: "contain",
                    //     // backgroundPosition: "center",
                    //     backgroundRepeat: "no-repeat",
                    // }}
                    >
                        <div className="relative flex justify-center top-12 hover:scale-105 transition-all duration-500">
                            <div className="flex justify-center rounded-full border-3 border-secondary h-40 w-40">
                                {
                                    user.photoURL ?
                                        <img className='rounded-full border-3 m-1 p-1 bg-white border-secondary-content' src={user.photoURL} alt="" />
                                        :
                                        <h1>Set Profile Picture</h1>
                                }
                            </div>
                            {/* <img src={profileBg2Vec} alt="" /> */}
                        </div>
                        <div className="bg-primary/50 rounded-t-2xl pt-12 bp-1 md:w-100 w-75 px-4 hover:scale-105 transition-all duration-500">
                            <h1 className='text-xl font-bold text-center text-base-300'>{userData.email}</h1>
                            <h1 className='text-xl font-bold text-center text-base-300'>{user.displayName ? user.displayName : "Set Name"}</h1>
                        </div>
                    </div>
                    <div className="md:w-100 w-75 px-4 h-100 shadow-2xl rounded-b-2xl hover:scale-105 transition-all duration-500 flex justify-center"
                        style={{
                            backgroundImage: `url("${decorCardBrown}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <form onSubmit={handleUpdateProfile} className="card-body md:pt-30 p-7 md:w-100">
                            <fieldset className="fieldset">

                                {/* Name */}
                                <label className="label font-black">Name:</label>
                                <input
                                    type="text"
                                    className="border-2 p-2 rounded-md border-primary-content"
                                    placeholder="Your Name"
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {/* photoURL */}
                                <label className="label font-black">Photo URL:</label>
                                <input
                                    type="text"
                                    className="border-2 p-2 rounded-md border-primary-content"
                                    placeholder="Photo URL"
                                    name='photo'
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                />
                                <button className="btn btn-primary mt-4 text-white">Update</button>
                            </fieldset>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
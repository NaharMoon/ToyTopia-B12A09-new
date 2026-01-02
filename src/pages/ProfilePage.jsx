import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast, ToastContainer } from 'react-toastify';

const ProfilePage = () => {
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
        <div>
            <h1>ProfilePage</h1>
            <h1>{userData.email}</h1>
            <h1>{user.displayName ? user.displayName : "Set Name"}</h1>
            {
                user.photoURL ?
                    <img src={user.photoURL} alt="" />
                    :
                    <h1>Set Profile Picture</h1>
            }

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleUpdateProfile} className="card-body">
                    <fieldset className="fieldset">

                        {/* Name */}
                        <label className="label">Name:</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="Your Name"
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {/* photoURL */}
                        <label className="label">Photo URL:</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="Photo URL"
                            name='photo'
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />

                        <button className="btn btn-neutral mt-4">Update</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
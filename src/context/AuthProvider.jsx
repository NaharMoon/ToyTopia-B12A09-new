import { onAuthStateChanged, signInWithPopup,  } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth, provider } from '../firebase/firebase.config';
import { useLocation, useNavigate } from 'react-router';
// import { toast } from 'react-toastify';

const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const [userData, setUserData] = useState('');
    const [loading, setLoading] = useState(true);
    // console.log("User Data: ", userData);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("User Found: ", user);
                setUserData(user);
                setLoading(false);
            }
            else {
                // console.log("User not Found");
                setLoading(false);
            }
        })
    }, []);

    // const handleUpdateProfile = (e,profile) => {
    //     e.preventDefault();

    //     updateProfile(auth.currentUser, profile)
    //         .then(() => {
    //             setUserData({
    //                 ...userData,
    //                 displayName: auth.currentUser.displayName,
    //                 photoURL: auth.currentUser.photoURL,
    //             });
    //             toast.success("Profile Updated.");
    //             console.log("Profile Updated.");
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         })
    // };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                // console.log("Google User: ", user);
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                // console.log(error.message);
            })
    };

    return (
        <div>
            <AuthContext
                value={{ userData, setUserData, loading, handleGoogleSignIn, navigate, location }}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;
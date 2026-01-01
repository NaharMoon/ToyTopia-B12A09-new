import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState('');
    const [loading, setLoading] = useState(true);
    console.log("User Data: ", userData);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User Found: ", user);
                setUserData(user);
                setLoading(false);
            }
            else {
                console.log("User not Found");
                setLoading(false);
            }
        })
    }, []);
    return (
        <div>
            <AuthContext
                value={{ userData, setUserData, loading }}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;
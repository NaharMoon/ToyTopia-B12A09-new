import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import LoadingPage from '../pages/LoadingPage';

const PrivateRoute = ({ children }) => {
    const {userData,loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(userData,loading,location);
    if (loading) {
        return <LoadingPage></LoadingPage>
    }
    else if (!userData) {
        return <Navigate to={"/auth/login"} state={location.pathname}></Navigate>;
    }
    else {
        return children;
    }
};

export default PrivateRoute;
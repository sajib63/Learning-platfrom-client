import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { user, loader } = useContext(AuthContext);

    if (!loader) {
        return <div>Loading......</div>
    }
    if (user?.uid) {
        return children
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
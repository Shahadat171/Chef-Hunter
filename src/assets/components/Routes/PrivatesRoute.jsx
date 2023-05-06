import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivatesRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const Location = useLocation();
    if(loading){
        return <progress className='progress w-56'></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from : Location}} replace></Navigate>
};

export default PrivatesRoute;
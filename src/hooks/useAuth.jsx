import React, { useContext, useDebugValue } from 'react';
import { AuthContext } from '../context';

const useAuth = () => {
    const { auth } = useContext(AuthContext)
    // we are utilizing the useDebugValue hook to debug if the user is logged in  or not 
    useDebugValue(auth, auth => auth?.user ? "user is logged in" : "user is not logged in")
    return useContext(AuthContext)

};

export default useAuth;
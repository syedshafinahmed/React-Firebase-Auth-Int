import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <div className='flex justify-center items-center'> <span className="loading loading-bars h-screen loading-xl scale-[4]"></span></div>
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;
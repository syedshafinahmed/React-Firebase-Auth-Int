import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({ children }) => {
  const { user } = use(AuthContext);
  if(user){
    return children;
  }
  return (
    <div>
      <Navigate to='/login'></Navigate>
    </div>
  );
};

export default PrivateRoutes;
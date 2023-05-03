import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <InfinitySpin
          width="200"
          color="#FA023C"></InfinitySpin>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      state={{ from: location }}
      to={'/login'}
      replace></Navigate>
  );
};

export default PrivateRoute;

import React from 'react';
import { Navigate, Outlet } from 'react-router';
import useFirebase from '../Firebase/useFirebase';

const PrivateRoute = ({ children }) => {
  const { user } = useFirebase();
  return user.email ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

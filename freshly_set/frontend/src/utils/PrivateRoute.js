import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/context/AuthContext';
 const PrivateRoute = ({ component: Component, ...rest }) => {

  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};


export default PrivateRoute

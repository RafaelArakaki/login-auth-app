import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

const PrivateRoutes = () => {
  const { signed } = useContext(AuthContext);

  if (signed === undefined) {
    return null; 
  }

  return signed 
    ? <Outlet />
    : <Navigate to="/login" />;
}

export default PrivateRoutes;
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  // Check if the user is authenticated
  const token = localStorage.getItem('token');
  // If the user is authenticated, render the children
  return token ? children : <Navigate to="/dashboard" />;
};

export default PrivateRoute;
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthGuard;

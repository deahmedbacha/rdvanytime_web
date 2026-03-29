import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../stores/useAuthStore';

/**
 * Route guard that redirects unauthenticated users to the sign-in page.
 * Wrap protected routes with this component.
 */
const PrivateRoute = () => {
  const token = useAuthStore((state) => state.token);
  return token ? <Outlet /> : <Navigate to="/Signin" replace />;
};

export default PrivateRoute;

import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../stores/useAuthStore';

/**
 * Route guard for auth pages (login, signup).
 * If the user is already authenticated, redirects to the profile page.
 */
const PublicRoute = () => {
  const token = useAuthStore((state) => state.token);
  return token ? <Navigate to="/Profil" replace /> : <Outlet />;
};

export default PublicRoute;

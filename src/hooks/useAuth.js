import { useEffect } from 'react';
import useAuthStore from '../stores/useAuthStore';

/**
 * Custom hook that wraps useAuthStore.
 * Auto-fetches the user profile on mount if a token exists but user data is missing.
 */
export const useAuth = () => {
  const { user, token, isLoading, error, login, logout, fetchUser, clearError } =
    useAuthStore();

  useEffect(() => {
    if (token && !user) {
      fetchUser();
    }
  }, [token, user, fetchUser]);

  return {
    user,
    token,
    isAuthenticated: !!token,
    isLoading,
    error,
    login,
    logout,
    clearError,
  };
};

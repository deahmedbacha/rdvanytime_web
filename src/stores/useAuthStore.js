import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as authService from '../services/auth.service';

/**
 * Global auth store with JWT persistence.
 * Persists only the token to localStorage via Zustand's persist plugin.
 * Provides login, logout, and fetchUser actions.
 */
const useAuthStore = create(
  persist(
    (set, get) => ({
      // ── State ──
      user: null,
      token: null,
      isLoading: false,
      error: null,

      // ── Actions ──
      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const { token } = await authService.login(email, password);
          localStorage.setItem('token', token);
          set({ token, isLoading: false });
          await get().fetchUser();
        } catch (err) {
          const message = err.response?.data?.msg || err.response?.data?.message || 'Login failed';
          set({ error: message, isLoading: false });
          throw err;
        }
      },

      fetchUser: async () => {
        try {
          const { data } = await authService.getUser();
          set({ user: data });
        } catch {
          set({ user: null, token: null });
          localStorage.removeItem('token');
        }
      },

      logout: () => {
        localStorage.removeItem('token');
        set({ user: null, token: null, error: null });
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ token: state.token }),
    },
  ),
);

export default useAuthStore;

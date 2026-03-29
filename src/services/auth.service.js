import api from '../config/api';

/**
 * Authenticates a user and returns a JWT token.
 */
export const login = async (email, password) => {
  const { data } = await api.post('/login', { email, password });
  return data;
};

/**
 * Registers a new user account.
 */
export const register = async ({ firstName, lastName, phoneNumber, email, password }) => {
  const { data } = await api.post('/register', {
    firstName, lastName, phoneNumber, email, password,
  });
  return data;
};

/**
 * Fetches the currently authenticated user's profile.
 */
export const getUser = async () => {
  const { data } = await api.post('/get-user', {});
  return data;
};

import api from '../config/api';

/**
 * Updates general user profile data.
 */
export const updateUser = async (userData) => {
  const { data } = await api.put('/update-user', userData);
  return data;
};

/**
 * Updates medical/health parameters for a user.
 */
export const updateSettings = async (settings) => {
  const { data } = await api.put('/users-parametre', settings);
  return data;
};

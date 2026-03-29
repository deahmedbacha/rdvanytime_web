import api from '../config/api';

/**
 * Searches doctors by optional city and specialty filters.
 */
export const searchDoctors = async ({ ville = '', type = '' } = {}) => {
  const { data } = await api.post('/search-doctors', { ville, type });
  return data;
};

/**
 * Retrieves a single doctor's profile by ID.
 */
export const getDoctorById = async (docId) => {
  const { data } = await api.post('/doctorbyid', { docId });
  return data;
};

/**
 * Fetches booked time slots for a specific doctor's calendar.
 */
export const getDoctorCalendar = async (docId) => {
  const { data } = await api.post('/doc-calender', { doc_id: docId });
  return data;
};

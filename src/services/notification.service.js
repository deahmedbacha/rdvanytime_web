import api from '../config/api';

/**
 * Fetches notifications for a doctor.
 */
export const getDoctorNotifications = async (doctorId) => {
  const { data } = await api.post('/notifications/doctor', { doctorId });
  return data;
};

/**
 * Fetches notifications for a patient.
 */
export const getPatientNotifications = async (patientId) => {
  const { data } = await api.post('/notifications/client', { patientId });
  return data;
};

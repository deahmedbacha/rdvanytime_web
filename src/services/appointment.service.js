import api from '../config/api';

/**
 * Books a new appointment with a doctor.
 */
export const addAppointment = async ({ doctorId, patientId, dateTime, notes }) => {
  const { data } = await api.post('/add-appointment', {
    doctorId, patientId, dateTime, notes,
  });
  return data;
};

/**
 * Cancels an existing appointment.
 */
export const cancelAppointment = async (appointmentId, userId) => {
  const { data } = await api.post('/cancel-appointment', {
    appointmentId,
    id: userId,
  });
  return data;
};

/**
 * Permanently removes an appointment.
 */
export const removeAppointment = async (appointmentId) => {
  const { data } = await api.post('/remove-appointment', { appointmentId });
  return data;
};

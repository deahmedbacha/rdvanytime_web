const Notification = require('../models/notification');

/**
 * Retrieves notifications for a doctor (where the doctor caused the action).
 */
const getDoctorNotifications = async (doctorId) => {
  return Notification.find({
    doctorId,
    who: 'Doctor',
  });
};

/**
 * Retrieves notifications for a patient (where the patient caused the action).
 */
const getPatientNotifications = async (patientId) => {
  return Notification.find({
    patientId,
    who: 'Patient',
  });
};

module.exports = { getDoctorNotifications, getPatientNotifications };

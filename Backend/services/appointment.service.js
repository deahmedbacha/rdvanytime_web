const mongoose = require('mongoose');
const Appointment = require('../models/Appointment');
const Notification = require('../models/notification');
const AppError = require('../utils/AppError');

/**
 * Returns all booked dateTimes for a given doctor.
 */
const getDoctorCalendar = async (docId) => {
  const doctorId = new mongoose.Types.ObjectId(docId);
  const appointments = await Appointment.find({ doctorId });
  return appointments.map((appt) => appt.dateTime);
};

/**
 * Creates a new appointment if no duplicate exists.
 */
const addAppointment = async ({ doctorId, patientId, dateTime, notes }) => {
  const existing = await Appointment.find({ doctorId, patientId, dateTime });
  if (existing.length > 0) {
    throw new AppError('Appointment already exists', 409);
  }

  const appointment = new Appointment({ doctorId, patientId, dateTime, notes });
  await appointment.save();
  return { msg: 'Appointment added successfully' };
};

/**
 * Cancels an appointment and creates a notification for the other party.
 */
const cancelAppointment = async (appointmentId, requesterId) => {
  const id = new mongoose.Types.ObjectId(appointmentId);
  const appointment = await Appointment.findByIdAndUpdate(
    id,
    { status: 'cancelled' },
    { new: true },
  );

  if (!appointment) {
    throw new AppError('Appointment not found', 404);
  }

  // Determine who cancelled and notify the other party
  const who = String(requesterId) === String(appointment.doctorId) ? 'Doctor' : 'Patient';
  const notification = new Notification({
    doctorId: appointment.doctorId,
    patientId: appointment.patientId,
    dateTime: appointment.dateTime,
    reason: 'Appointment cancelled',
    who,
  });
  await notification.save();

  return { msg: 'Appointment cancelled successfully' };
};

/**
 * Permanently removes an appointment from the database.
 */
const removeAppointment = async (appointmentId) => {
  const id = new mongoose.Types.ObjectId(appointmentId);
  const appointment = await Appointment.findByIdAndDelete(id);
  if (!appointment) {
    throw new AppError('Appointment not found', 404);
  }
  return { msg: 'Appointment removed successfully' };
};

module.exports = { getDoctorCalendar, addAppointment, cancelAppointment, removeAppointment };

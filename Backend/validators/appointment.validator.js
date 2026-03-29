const { z } = require('zod');

const addAppointmentSchema = z.object({
  doctorId: z.string().min(1, 'Doctor ID is required'),
  patientId: z.string().min(1, 'Patient ID is required'),
  dateTime: z.string().min(1, 'DateTime is required'),
  notes: z.string().optional().default(''),
});

const cancelAppointmentSchema = z.object({
  appointmentId: z.string().min(1, 'Appointment ID is required'),
  id: z.string().min(1, 'User ID is required'),
});

const removeAppointmentSchema = z.object({
  appointmentId: z.string().min(1, 'Appointment ID is required'),
});

const docCalendarSchema = z.object({
  doc_id: z.string().min(1, 'Doctor ID is required'),
});

module.exports = {
  addAppointmentSchema,
  cancelAppointmentSchema,
  removeAppointmentSchema,
  docCalendarSchema,
};

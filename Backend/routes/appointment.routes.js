const { Router } = require('express');
const appointmentController = require('../controllers/appointment.controller');

const router = Router();

// POST /api/appointments/calendar — Get booked slots for a doctor
router.post('/calendar', appointmentController.getCalendar);

// POST /api/appointments/add — Create a new appointment
router.post('/add', appointmentController.addAppointment);

// POST /api/appointments/cancel — Cancel an existing appointment
router.post('/cancel', appointmentController.cancelAppointment);

// POST /api/appointments/remove — Permanently delete an appointment
router.post('/remove', appointmentController.removeAppointment);

module.exports = router;

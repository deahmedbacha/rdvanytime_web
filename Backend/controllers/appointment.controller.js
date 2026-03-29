const catchAsync = require('../utils/catchAsync');
const appointmentService = require('../services/appointment.service');

const getCalendar = catchAsync(async (req, res) => {
  const dateTimes = await appointmentService.getDoctorCalendar(req.body.doc_id);
  res.json({ dateTime: dateTimes });
});

const addAppointment = catchAsync(async (req, res) => {
  const result = await appointmentService.addAppointment(req.body);
  res.json(result);
});

const cancelAppointment = catchAsync(async (req, res) => {
  const result = await appointmentService.cancelAppointment(
    req.body.appointmentId,
    req.body.id,
  );
  res.json(result);
});

const removeAppointment = catchAsync(async (req, res) => {
  const result = await appointmentService.removeAppointment(req.body.appointmentId);
  res.json(result);
});

module.exports = { getCalendar, addAppointment, cancelAppointment, removeAppointment };

const catchAsync = require('../utils/catchAsync');
const notificationService = require('../services/notification.service');

const getDoctorNotifications = catchAsync(async (req, res) => {
  const notifications = await notificationService.getDoctorNotifications(req.body.doctorId);
  res.json(notifications);
});

const getPatientNotifications = catchAsync(async (req, res) => {
  const notifications = await notificationService.getPatientNotifications(req.body.patientId);
  res.json(notifications);
});

module.exports = { getDoctorNotifications, getPatientNotifications };

const { Router } = require('express');
const notificationController = require('../controllers/notification.controller');

const router = Router();

// POST /api/notifications/doctor — Get notifications for a doctor
router.post('/doctor', notificationController.getDoctorNotifications);

// POST /api/notifications/client — Get notifications for a patient
router.post('/client', notificationController.getPatientNotifications);

module.exports = router;

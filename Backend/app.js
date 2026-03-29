const express = require('express');
const cors = require('cors');
const { corsOrigin } = require('./config/env');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// ── Global Middlewares ──
app.use(express.json());
app.use(cors({
  origin: corsOrigin,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// ── API Routes (prefixed with /api) ──
app.use('/api', routes);

// ── Legacy routes (backward compatibility during migration) ──
// These map old endpoint paths to the new MVC structure.
// Remove once the frontend is updated to use /api/* paths.
const authController = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');
const doctorController = require('./controllers/doctor.controller');
const appointmentController = require('./controllers/appointment.controller');
const notificationController = require('./controllers/notification.controller');
const authmiddleware = require('./middlewares/auth');

app.post('/register', authController.register);
app.post('/login', authController.login);
app.post('/get-user', authmiddleware, userController.getUser);
app.put('/update-user', authmiddleware, userController.updateUser);
app.put('/users-parametre', userController.updateSettings);
app.post('/search-doctors', doctorController.searchDoctors);
app.post('/doctorbyid', doctorController.getDoctorById);
app.post('/doc-calender', appointmentController.getCalendar);
app.post('/add-appointment', appointmentController.addAppointment);
app.post('/cancel-appointment', appointmentController.cancelAppointment);
app.post('/remove-appointment', appointmentController.removeAppointment);
app.post('/notifications/doctor', notificationController.getDoctorNotifications);
app.post('/notifications/client', notificationController.getPatientNotifications);

// ── 404 Handler ──
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ── Global Error Handler (must be last) ──
app.use(errorHandler);

module.exports = app;

const { Router } = require('express');
const doctorController = require('../controllers/doctor.controller');

const router = Router();

// POST /api/doctors/search — Search doctors by city and/or specialty
router.post('/search', doctorController.searchDoctors);

// POST /api/doctors/by-id — Get a single doctor by ID
router.post('/by-id', doctorController.getDoctorById);

module.exports = router;

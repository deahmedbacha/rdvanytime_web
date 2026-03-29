const catchAsync = require('../utils/catchAsync');
const doctorService = require('../services/doctor.service');

const searchDoctors = catchAsync(async (req, res) => {
  const doctors = await doctorService.searchDoctors(req.body);
  res.json(doctors);
});

const getDoctorById = catchAsync(async (req, res) => {
  const doctor = await doctorService.findDoctorById(req.body.docId);
  res.json(doctor);
});

module.exports = { searchDoctors, getDoctorById };

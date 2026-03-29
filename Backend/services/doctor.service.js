const Doctor = require('../models/Doctor');
const AppError = require('../utils/AppError');

/**
 * Searches doctors by optional city and/or specialty.
 * Builds a dynamic Mongo filter instead of the original 4-branch if/else.
 */
const searchDoctors = async ({ ville, type }) => {
  const filter = {};
  if (ville) filter.ville = ville;
  if (type) filter.type = type;
  return Doctor.find(filter);
};

/**
 * Finds a single doctor by MongoDB ObjectId.
 */
const findDoctorById = async (docId) => {
  const doctor = await Doctor.findById(docId);
  if (!doctor) {
    throw new AppError('Doctor not found', 404);
  }
  return doctor;
};

module.exports = { searchDoctors, findDoctorById };

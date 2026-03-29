const User = require('../models/user');
const AppError = require('../utils/AppError');

/**
 * Retrieves a user's full profile by their decoded JWT data.
 */
const getUserByToken = async (decodedUser) => {
  const user = await User.findOne({
    firstName: decodedUser.firstName,
    lastName: decodedUser.lastName,
  });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  return {
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    email: user.email,
    taille: user.taille,
    poids: user.poids,
    blood_type: user.blood_type,
    Fumeur: user.Fumeur,
    Alcool: user.Alcool,
    Marie: user.Marie,
    maladieCronique: user.maladieCronique,
    chirurgie: user.chirurgie,
    allergie: user.allergie,
    medicament: user.medicament,
    rue: user.rue,
    rueNumero: user.rueNumero,
    ville: user.ville,
    codePostale: user.codePostale,
    dateNaissance: user.dateNaissance,
    sexe: user.sexe,
    pays: user.pays,
  };
};

/**
 * Updates general user profile data.
 */
const updateUser = async (userId, updateData) => {
  const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
  if (!user) {
    throw new AppError('User not found', 404);
  }
  return user;
};

/**
 * Updates medical/health settings for a user.
 */
const updateSettings = async ({
  userId, taille, poids, blood_type,
  Fumeur, Alcool, Marie,
  maladieCronique, chirurgie, allergie, medicament,
}) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new AppError('User not found', 404);
  }

  user.taille = taille;
  user.poids = poids;
  user.blood_type = blood_type;
  user.Fumeur = Fumeur;
  user.Alcool = Alcool;
  user.Marie = Marie;
  user.maladieCronique = maladieCronique;
  user.chirurgie = chirurgie;
  user.allergie = allergie;
  user.medicament = medicament;

  await user.save();
  return user;
};

module.exports = { getUserByToken, updateUser, updateSettings };

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const AppError = require('../utils/AppError');
const { jwtSecret, jwtExpiresIn } = require('../config/env');

const SALT_ROUNDS = 10;

/**
 * Registers a new user after checking for duplicates and hashing the password.
 */
const register = async ({ firstName, lastName, phoneNumber, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError('User already exists', 400);
  }

  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    firstName,
    lastName,
    phoneNumber,
    email,
    password: hashedPassword,
  });

  await user.save();
  return { msg: 'User registered successfully' };
};

/**
 * Authenticates a user by email/password and returns a signed JWT.
 */
const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError('Invalid credentials', 400);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError('Invalid credentials', 400);
  }

  const payload = {
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  };

  return new Promise((resolve, reject) => {
    jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn }, (err, token) => {
      if (err) return reject(err);
      resolve({ token });
    });
  });
};

module.exports = { register, login };

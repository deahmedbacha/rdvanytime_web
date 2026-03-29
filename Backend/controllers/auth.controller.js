const catchAsync = require('../utils/catchAsync');
const authService = require('../services/auth.service');

const register = catchAsync(async (req, res) => {
  const result = await authService.register(req.body);
  res.status(201).json(result);
});

const login = catchAsync(async (req, res) => {
  const result = await authService.login(req.body);
  res.json(result);
});

module.exports = { register, login };

const catchAsync = require('../utils/catchAsync');
const userService = require('../services/user.service');

const getUser = catchAsync(async (req, res) => {
  const userData = await userService.getUserByToken(req.user.user);
  res.status(200).json({ data: userData });
});

const updateUser = catchAsync(async (req, res) => {
  const userId = req.user.user.id;
  const user = await userService.updateUser(userId, req.body);
  res.status(200).json({
    message: 'User data updated successfully',
    success: true,
    data: user,
  });
});

const updateSettings = catchAsync(async (req, res) => {
  const user = await userService.updateSettings(req.body);
  res.json(user);
});

module.exports = { getUser, updateUser, updateSettings };

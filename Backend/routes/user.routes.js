const { Router } = require('express');
const authmiddleware = require('../middlewares/auth');
const userController = require('../controllers/user.controller');

const router = Router();

// POST /api/users/me — Get authenticated user's profile
router.post('/me', authmiddleware, userController.getUser);

// PUT /api/users/update — Update general profile
router.put('/update', authmiddleware, userController.updateUser);

// PUT /api/users/settings — Update medical/health settings
router.put('/settings', userController.updateSettings);

module.exports = router;

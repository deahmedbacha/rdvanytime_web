const { Router } = require('express');
const authController = require('../controllers/auth.controller');
// Note: Zod validation will be enabled once the package is installed
// const validate = require('../middlewares/validate');
// const { registerSchema, loginSchema } = require('../validators/auth.validator');

const router = Router();

// POST /api/auth/register
router.post('/register', authController.register);

// POST /api/auth/login
router.post('/login', authController.login);

module.exports = router;

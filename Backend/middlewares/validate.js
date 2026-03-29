const AppError = require('../utils/AppError');

/**
 * Express middleware factory for Zod schema validation.
 * Validates req.body against the given schema.
 * On failure, forwards a 400 AppError with field-level details.
 */
const validate = (schema) => (req, _res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    const message = result.error.errors
      .map((e) => `${e.path.join('.')}: ${e.message}`)
      .join(', ');
    return next(new AppError(message, 400));
  }

  req.body = result.data; // Replace with cleaned/coerced data
  next();
};

module.exports = validate;

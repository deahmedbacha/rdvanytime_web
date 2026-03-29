/**
 * Wraps an async route handler so that rejected promises
 * are forwarded to Express's error-handling middleware.
 * Eliminates repetitive try/catch blocks in every controller.
 */
const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = catchAsync;

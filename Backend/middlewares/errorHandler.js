const { nodeEnv } = require('../config/env');

/**
 * Global Express error-handling middleware.
 * Must be registered LAST (after all routes).
 *
 * - Operational errors (AppError): sends the message to the client.
 * - Programmer errors: sends a generic 500 and logs the stack.
 */
const errorHandler = (err, req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'Internal Server Error';

  if (statusCode >= 500) {
    console.error(`[ERROR] ${req.method} ${req.originalUrl} — ${err.message}`);
    if (nodeEnv === 'development') {
      console.error(err.stack);
    }
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(nodeEnv === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;

let dotenv;
try {
  dotenv = require('dotenv');
} catch {
  // Fallback to root node_modules (monorepo layout)
  dotenv = require('../../node_modules/dotenv');
}
const path = require('path');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const requiredVars = ['MONGODB_URI', 'JWT_SECRET'];

for (const varName of requiredVars) {
  if (!process.env[varName]) {
    throw new Error(`❌ Missing required env variable: ${varName}`);
  }
}

module.exports = {
  port: parseInt(process.env.PORT, 10) || 4000,
  mongoUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  nodeEnv: process.env.NODE_ENV || 'development',
};

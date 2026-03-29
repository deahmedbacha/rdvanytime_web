/**
 * Server bootstrap — connects to MongoDB then starts the Express app.
 * All route definitions and middleware configuration live in app.js.
 */
const mongoose = require('mongoose');
const { port, mongoUri } = require('./config/env');
const app = require('./app');

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
  });
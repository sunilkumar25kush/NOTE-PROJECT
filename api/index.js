require("dotenv").config();
const app = require("../src/app");
const connectdb = require("../src/db/bd");

// Connect to database
connectdb();

// Export for Vercel
module.exports = app;

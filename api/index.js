require("dotenv").config();
const app = require("../src/app");
const connectdb = require("../src/db/bd");

// Connect to database once
let isConnected = false;

const handler = async (req, res) => {
  if (!isConnected) {
    await connectdb();
    isConnected = true;
  }
  return app(req, res);
};

// Export for Vercel
module.exports = handler;

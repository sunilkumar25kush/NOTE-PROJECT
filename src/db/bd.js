const mongoose = require("mongoose");

async function connectdb (){
   const mongoUri = process.env.MONGODB_URI || "mongodb+srv://sunil:1ogwCTvn31VAlpSP@first-backend.9jnkact.mongodb.net/joyboy"
   
   await mongoose.connect(mongoUri)
   console.log("connected to DB")
}

module.exports = connectdb
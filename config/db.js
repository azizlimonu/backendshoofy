const mongoose = require('mongoose');
const { secret } = require('./secret');

mongoose.set('strictQuery', false);

const MONGO_URI = secret.db_url;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESS");
  } catch (error) {
    console.log("MONGODB CONNECTED FAILED", error.message);
  }
};

module.exports = connectDB;
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO);
    console.log(`Prisijungem i DB. ${conn.connection.host}`);
  } catch (error) {
    console.log("nepavyko.", error);
    process.exit(1);
  }
};

module.exports = connectDB;

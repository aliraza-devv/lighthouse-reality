import consola from "consola";
import mongoose from "mongoose";

const { success, error } = consola;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    success({
      badge: true,
      message: `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold,
    });
  } catch (err) {
    error({
      badge: true,
      message: `MONGODB ERROR: ${err.message}`.red.underline.bold,
    });
  }
};

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      return new Error();
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connnection Sucessful");
  } catch (error) {
    console.log(error);
  }
};

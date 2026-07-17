import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
    console.log(error);
    console.log("Database not connected");
    process.exit(1); //  o means success 1 means faillure ;
  }
};

export default connectDB;

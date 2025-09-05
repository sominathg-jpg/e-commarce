import mongoose from "mongoose";
import dorenv from "dotenv";
dorenv.config();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
   
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // Exit if DB fails
  }
};

export default connectDb;

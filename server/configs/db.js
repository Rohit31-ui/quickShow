import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => 
      console.log('Database connected successfully 🎉')
    );

    mongoose.connection.on("error", (err) =>
      console.log("MongoDB Connection Error:", err)
    );

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });

  } catch (error) {
    console.log("DB Error:", error.message);
  }
};

export default connectDB;

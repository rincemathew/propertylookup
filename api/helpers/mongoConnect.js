import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
    }
};

export default connectToMongoDB;
import mongoose from "mongoose";
const MONGO_URL ='mongodb+srv://ss22:ss22@cluster0.bpw16.mongodb.net/loginPage_tests'


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}`, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log(`MongoDB connected! DB HOST: ${MONGO_URL}`);
    } catch (error) {
        console.error("MONGODB connection FAILED: ", error);
        throw new Error("Failed to connect to MongoDB");
    }
};

export { connectDB };

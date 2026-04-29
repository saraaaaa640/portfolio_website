import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI!
            );
        
        console.log("Mongo connected");
        }
    
    catch(error){
        console.error(error);
        process.exit(1);
    }

};
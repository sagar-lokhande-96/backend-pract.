import {DB_NAME} from "../constant.js";
import mongoose, { mongo } from "mongoose";

export const connectDB = async()=>{
    try {
        const mongooseInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongodb connected successfully!!! host on ${mongooseInstance.connection.host}`)
    } catch (error) {
        console.log("mongodb connection error !! ",error);
        process.exit(1);
    }
}



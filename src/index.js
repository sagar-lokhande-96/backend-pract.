import {connectDB} from "./dbs/index.js"
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
})

connectDB();

// import express from "express";
// import { DB_NAME } from "./constant.js";
// import mongoose  from "mongoose";
// const app = express();

// const connectDB = async ()=>{
//     try {
//         await mongoose.connect(`${proces.env.MONGODB_URI}/ ${DB_NAME}`)
//         app.on("errror",(error)=>{
//             console.log("error: ",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app listening on port ${proces.env.PORT}`);
//         })
        
//     } catch (error) {
//         process.exit(1);
//         console.log("error : ",error);
//         throw error;
//     }
// }
// connectDB();
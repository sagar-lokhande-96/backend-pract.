import {connectDB} from "./dbs/index.js"
import dotenv from "dotenv";
import express from "express";
const app = express();

dotenv.config({
    path: "./env"
})

connectDB()
    .then(
        app.listen(process.env.PORT || 5000,()=>{
            console.log(`The server is listening on port ${process.env.PORT}`);
        })
    )
    .catch((err)=>{
        console.log(`mongodb connection is failed !!!  : `,err);
    })

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
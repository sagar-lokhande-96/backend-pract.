import {connectDB} from "./db/index.js";
import dotenv from "dotenv";
import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config({
    path: "./env"
})

connectDB()
    .then( ()=>{
        app.on("error",(error)=>{
            console.log("error: ",error);
            throw error;
        })
        app.listen(PORT,() =>{
            console.log(`The server is listening on port ${PORT}`);
        })
    })
    .catch((err)=>{
        console.log(`mongodb connection is failed !!!  : `,err);
    })



//connection way 1st
 
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
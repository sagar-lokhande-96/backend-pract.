import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// Middleware to parse incoming JSON data with a size limit of 16kb
app.use(express.json({ limit: "16kb" }));

// Middleware to serve static files from the "public" directory
app.use(express.static("public"));

// Middleware to parse URL-encoded data with extended option enabled and a size limit of 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Middleware to parse cookies from incoming requests
app.use(cookieParser());


// cors domain configration
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


export { app } 
import express from "express";
import connectToMongoDB from "./helpers/mongoConnect.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from './routes/listing.route.js';
import cors from "cors"
const app = express();
import cookieParser from 'cookie-parser';

import dotenv from "dotenv";
dotenv.config();

import vhost from "vhost";

app.use(express.json());

app.use(express.static("public"));

app.use(cookieParser());

// const adminRouter = require('./routers/adminRoute')

connectToMongoDB();
//used vhost to create subdomains
app.use(vhost("localhost", userRouter));
app.use(vhost("localhost", authRouter));
app.use('localhost/api/listing', listingRouter);
// app.use(vhost(`admin.localhost`, adminRouter));

app.listen(process.env.PORT, () => {
  console.log("server started");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

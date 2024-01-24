import express from "express";
import connectToMongoDB from "./helpers/mongoConnect.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import vhost from "vhost";

app.use(express.json());

app.use(express.static("public"));

// const adminRouter = require('./routers/adminRoute')

connectToMongoDB();
//used vhost to create subdomains
app.use(vhost("localhost", userRouter));
app.use(vhost("localhost", authRouter));
// app.use(vhost(`admin.localhost`, adminRouter));

app.listen(process.env.PORT, () => {
  console.log("server started");
});

app.use((err, req, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return resizeBy.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

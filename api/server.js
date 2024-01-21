import express from "express";
import "./helpers/mongoConnect"
const app = express();


import mongoose from "./helpers/mongoConnect";
// import dotenv from 'dotenv';
import('dotenv').config()

const vhost = import('vhost')


app.use(express.static('public'))

const userRouter = require('./routers/userRoute')
// const adminRouter = require('./routers/adminRoute')


//used vhost to create subdomains
app.use(vhost('localhost', userRouter));
// app.use(vhost(`admin.localhost`, adminRouter));

app.listen(process.env.PORT,()=>{
    console.log('server started')
})
import express from "express";
import connectToMongoDB from "./helpers/mongoConnect.js";
import userRouter from './routes/user.route.js'
const app = express();


import dotenv from 'dotenv';
dotenv.config();

import vhost from "vhost";


app.use(express.json())

app.use(express.static('public'))

// const adminRouter = require('./routers/adminRoute')

connectToMongoDB()
//used vhost to create subdomains
app.use(vhost('localhost', userRouter));
// app.use(vhost(`admin.localhost`, adminRouter));

app.listen(process.env.PORT,()=>{
    console.log('server started')
})
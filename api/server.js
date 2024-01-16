import express from "express";
const app = express();


import mongoose from "./helpers/mongoConnect";
// import dotenv from 'dotenv';
import('dotenv').config()

const vhost = import('vhost')


app.listen(process.env.PORT,()=>{
    console.log('server started')
})
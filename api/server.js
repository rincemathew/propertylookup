import express from "express";
import dotenv from 'dotenv';
const port = 5000

const app = express();

app.listen(port,()=>{
    console.log('server started')
})
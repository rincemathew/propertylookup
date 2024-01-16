import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB)
.then(()=>{
    console.log("mongodb is connected")
}).catch(()=>{
    console.log("failed to connect")
})

module.exports = mongoose
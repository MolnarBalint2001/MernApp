




const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connectDB = require("./database/connect");




connectDB();


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}!`);
})






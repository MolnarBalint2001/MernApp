




const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connectDB = require("./database/connect");
const cors = require("cors");


const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");



app.use(cors());




connectDB();



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}!`);
})






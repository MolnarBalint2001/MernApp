

const mongoose = require("mongoose");


const connectDB = async() =>{

    try {
        
        const connection = mongoose.connect("mongodb+srv://Molnar:Molnar20@mycluster.tsygf.mongodb.net/MyDatabase?retryWrites=true&w=majority");
        console.log("MongoDB was connected successfully!")

    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}


module.exports = connectDB;


const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({

    username:{
        type:"String",
        required:[true, "Please add a username"],
        unique:true
    },
    password:{
        type:"String",
        required:[true, "Please add a password"]
    }

},
{
    timestamps:true
});


module.exports = mongoose.model("User", UserSchema);

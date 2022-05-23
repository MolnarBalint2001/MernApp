

const mongoose = require("mongoose");


const NoteSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    title:{
        type:"String",
        required:true
    },
    description:{
        type:"String",
    },
    done:{
        type:Boolean,
    }
});


module.exports = mongoose.model("note", NoteSchema);




const Note = require("../model/noteModel");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");



const getNotes = asyncHandler(async(req,res)=>{

    const {username} = req.body;

    if(!username){
        res.status(400);
    }

    const user = await User.findOne({username})
    const id = user._id;
    console.log(user._id)



    const notes = await Note.find().where({"user": id});
    console.log(notes)

    if (!notes){
        res.json({
            message:"There is no notes in the database!"
        });
    };

    res.json({
        notes:notes
    });
});



const createNote = asyncHandler(async(req,res)=>{

    const {username, title, description, status} = req.body


    if (!username && !(title)){
        res.json({
            messsage:"Failed to create a note!"
        });
    };

    try {

        console.log("Find user!")
        const user = await User.findOne({username});

        if(!user){
            res.status(404)
        }

        console.log("NewNote!")
        const newNote = new Note({
            user:user,
            title:title,
            description:description,
            done:status
        });
        

        console.log("Create Note!")
        await Note.create(newNote);
        res.json({
            message:`New note was created successfully! ${newNote.user} ${newNote.title}`
        });
    } catch (error) {
        res.status(405).json({
            message:"Something failed!",
            error: error
        })
    }
   
});


const updateNote = asyncHandler(async(req, res)=>{

    console.log(req.body)
    const note = Note.findById(req.params.id);

    if(!note){
        res.json({
            message:"Note does not exist on that id!"
        })
    }

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json({
        updateNoted:updatedNote,
        message:"Update was succesfull!"
    });
});


const deleteNote = asyncHandler(async(req,res)=>{

    
    const note = Note.findById(req.params.id);

    if(!note){
        res.json({
            message:"Note does not exist on that id!"
        });
    };

    await note.deleteOne();
    res.json({
        message:`${req.params.id} note was deleted successfully! `
    });
});


module.exports = {
    getNotes,
    createNote,
    updateNote,
    deleteNote
}









const Note = require("../model/noteModel");
const asyncHandler = require("express-async-handler");



const getNotes = asyncHandler(async(req,res)=>{

    const notes = await Note.find();

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

    const {user, title, description, done} = req.body

    if (!user && !title){
        res.json({
            messsage:"Failed to create a note!"
        });
    };

    const newNote = new Note({
        user:user,
        title:title,
        description:description,
        done:done
    });

    await Note.create(newNote);
    res.json({
        message:`New note was created successfully! ${newNote.user} ${newNote.title}`
    });
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





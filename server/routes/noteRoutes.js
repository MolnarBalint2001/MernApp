


const express = require("express");
const router = express.Router();

const {
    getNotes,
    createNote,
    updateNote,
    deleteNote
} = require("../controllers/noteController");


router.route("/").post(createNote);
router.route("/:id").put(updateNote).delete(deleteNote);
router.route("/getNotes").post(getNotes);


module.exports = router;
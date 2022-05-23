

const express = require("express");
const router = express.Router();


const {
    loginUser,
    registerUser,
    getMe,
    validateUser

} = require("../controllers/userController");



router.post("/", registerUser);
router.post("/sign_in", loginUser);
router.get("/me", getMe)
router.post("/me", validateUser)



module.exports = router;
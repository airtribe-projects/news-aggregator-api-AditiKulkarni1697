const express = require("express");
const userRouter = express.Router();
const {createUser} = require("../controllers/user.controller");
const { validateTask } = require("../middleware/validateuser.middleware");

userRouter
.post("/signup",validateTask, createUser);

module.exports = {userRouter}
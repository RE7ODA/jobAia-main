const express = require("express");
const router = express.Router();
const {PostComment , GetComments} = require("../Feedback/Controller/Feedback.controller");


router.post("/feedback/:id", PostComment);

router.get("/feedback", GetComments);


module.exports = router;
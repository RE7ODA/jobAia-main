const express = require("express");
const router = express.Router();
const {updateDetails , getProfile ,Postdetails} = require("../Profile/Controller/Profile.controller");


router.post("/profile/:id", Postdetails);

router.get("/profile/:id/:idSkill", getProfile);

router.put("/profile/:id", updateDetails);

module.exports = router;
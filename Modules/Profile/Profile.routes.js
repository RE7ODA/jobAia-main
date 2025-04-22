const express = require("express");
const router = express.Router();
const {updateDetails , Postdetails} = require("../Profile/Controller/Profile.controller");


router.post("/profile/:id", Postdetails);

router.put("/profile/:id", updateDetails);

module.exports = router;
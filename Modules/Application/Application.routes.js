const express = require("express");
const router = express.Router();


const { ViewApplication, CreateApplication } = require("./Controller/Application.controller");



router.get('/application', ViewApplication);

router.post('/application/:userId/:JobId', CreateApplication);


module.exports = router;
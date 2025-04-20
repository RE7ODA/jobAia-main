const express = require("express");
const router = express.Router();
const { ViewJobs, CreateJob, ViewPaginatedJobs, getJobById, newestJobs } = require("../JobPost/Controller/JobPost.controller");


router.get('/JobPosting', ViewJobs);

router.post('/JobPosting/:id', CreateJob);

router.get('/JobPosting/paginated', ViewPaginatedJobs);

router.get('/jobDetails/:id', getJobById);

router.get('/newestJobs', newestJobs);


module.exports = router;
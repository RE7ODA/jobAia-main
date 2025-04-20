const router = require('express').Router();
const path = require('path')
const search = require('./controller/search.controller')
router.get('/search/:key', search.searchFun)
module.exports = router
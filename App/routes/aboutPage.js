const express = require('express');
const router = express.Router();
const { aboutPage } = require('../controller/aboutController');

// about page 
router.get('/about', aboutPage);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getLoginPage, postLoginPage } = require('../controller/loginController')


//Login page get
router.get(['/', '/login'], getLoginPage);

// Login page post
router.post('/login', postLoginPage);

module.exports = router;

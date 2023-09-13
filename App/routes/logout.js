const express = require('express');
const router = express.Router();

//logout 
router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;

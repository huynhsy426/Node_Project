const aboutPage = (req, res) => {
    if (req.session.loggedIn) {
        res.render('pages/about');
    }
    res.redirect('/login');
};

module.exports = { aboutPage }
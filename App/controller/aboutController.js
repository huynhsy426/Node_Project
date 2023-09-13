const aboutPage = (req, res) => {
    if (req.session.loggedIn) {
        res.render('pages/about');
    } else {
        res.redirect('/login');
    }
};

module.exports = { aboutPage }
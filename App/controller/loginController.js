const users = [
    { username: 'abc', password: 'abc' },
    { username: 'asd', password: 'asd' },
    { username: 'qwe', password: 'qwe' },
    { username: 'zxc', password: 'zxc' }
]

const getLoginPage = (req, res) => {
    res.render('pages/login', {
        errMessage: ""
    });
};

const postLoginPage = (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    let objIndex = users.some((user => user.username == username && user.password == password));
    console.log(objIndex);

    if (objIndex) {
        console.log("yes");

        session = req.session;
        session.username = username;
        session.password = password;
        session.loggedIn = true;
        res.redirect(`/home`);
    } else {
        console.log("no")

        const errMessage = "Wrong account";
        res.render('pages/login', { errMessage });
    }
};

module.exports = {
    getLoginPage,
    postLoginPage
}
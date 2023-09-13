// import routers from './routes';

const express = require('express');
const session = require('express-session');
const app = express();
const configViewEngine = require('./App/config/viewEngine');
const loginRouter = require('./App/routes/loginWeb')
const homeRouter = require('./App/routes/homePage')
const aboutRouter = require('./App/routes/aboutPage')
const logoutRouter = require('./App/routes/logout')


var dirName = __dirname;
configViewEngine(app, session, dirName);

app.use(loginRouter);
app.use(homeRouter);
app.use(aboutRouter);
app.use(logoutRouter);


app.listen(8080);
console.log('Listening on port 8080');

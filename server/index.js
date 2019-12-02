const auth = require('./Components/auth/strategies');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const passport = require('passport');
const router = require('./Network/routes');
const session = require('express-session')
const SETUP = require('../config');
const cors = require('cors');

auth(passport);

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: 'laksdnlasd',
    resave: false,
    saveUninitialized: false,
    cookie: { expires : new Date(Date.now() + 3600000) }
    // cookie: { secure: true }
  }))

app.use(passport.initialize());
app.use(passport.session());


router(app);


const PORT = SETUP.CONFIG.port;
app.listen(PORT);




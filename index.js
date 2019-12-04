const auth = require('./Components/auth/strategies');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const passport = require('passport');
const router = require('./Network/routes');
const session = require('express-session')
const SETUP = require('./config');
const cors = require('cors');
const cookieParser = require('cookie-parser');

auth(passport);

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.get('/pizarra', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 
'index.html'));
});

app.get('/ultimosmovimientos', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 
'index.html'));
});

app.use(session({
    secret: 'laksdnlasd',
    resave: false,
    saveUninitialized: false,
    cookie: { expires : new Date(Date.now() + 3600000) }
  }))

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser())

router(app);


const PORT = process.env.PORT || SETUP.CONFIG.port;
app.listen(PORT);




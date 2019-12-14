const auth = require('./Components/auth/strategies');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const passport = require('passport');
const router = require('./Network/routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const html = path.resolve('client', 'public', 'index.html');
const session = require('express-session');
const SETUP = require('./config');

auth(passport);

const app = express();
app.use(cors());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.get('/pizarra', (req, res) => {
  res.sendFile(html);
});

app.get('/ultimosmovimientos', (req, res) => {
  res.sendFile(html);
});

app.use(passport.initialize());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

router(app);

app.listen(SETUP.CONFIG.NODE_PORT || 5000, () => console.log(`Listening on port ${SETUP.CONFIG.NODE_PORT}!`));

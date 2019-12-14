const auth = require('./Components/auth/strategies');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const passport = require('passport');
const router = require('./Network/routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const html = path.resolve('dist', 'index.html');
const session = require('express-session');

auth(passport);

const app = express();
app.use(cors());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'));

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

app.listen(process.env.NODE_PORT || 5000, () => console.log(`Listening on port ${process.env.NODE_PORT}!`));

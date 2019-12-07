const auth = require('./Components/auth/strategies');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const passport = require('passport');
const router = require('./Network/routes');
var cookieParser = require('cookie-parser')
const SETUP = require('./config');
const cors = require('cors');

auth(passport);

const app = express();

app.use(cors());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "client/build")));

app.get('/pizarra', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 
'index.html'));
});

app.get('/ultimosmovimientos', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 
'index.html'));
});

app.use(passport.initialize());

router(app);


const PORT = process.env.PORT || SETUP.CONFIG.port;
app.listen(PORT);




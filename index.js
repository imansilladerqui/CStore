const auth = require('./Components/auth/strategies');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const passport = require('passport');
const router = require('./Network/routes');
const session = require('express-session');
const SETUP = require('./config');
const cors = require('cors');

auth(passport);

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.get('/pizarra', (req, res) => {
  console.log(process.env.NODE_ENV);
  res.sendFile(path.resolve(__dirname, 'client', 'build', 
'index.html'));
});

app.get('/ultimosmovimientos', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 
'index.html'));
});

// app.use(session({
//   name: 'session',
//   secret: 'key',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 15 * 60 * 1000,
//     // httpOnly: false,
//     secure: false
//     // secure: process.env.NODE_ENV == "production" ? true : false ,
//   }
// }))

var MemoryStore =session.MemoryStore;
app.use(session({
    name : 'app.sid',
    secret: "1234567890QWERTY",
    resave: true,
    store: new MemoryStore(),
    saveUninitialized: true
}));

app.use(passport.initialize());

router(app);


const PORT = process.env.PORT || SETUP.CONFIG.port;
app.listen(PORT);




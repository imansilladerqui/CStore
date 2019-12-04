
const express = require('express');
const Router = express.Router();
const User = require('../auth/model');
const _ = require('lodash');

Router.get('/', (req, res) => {
    return Promise.resolve(User.findOne({ where: {email: req.cookies.mail}, raw: true})
    .then(result => {
        res.clearCookie('mail');
        return res.send(result);
    }));
});

module.exports = Router;
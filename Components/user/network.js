
const express = require('express');
const Router = express.Router();
const User = require('../auth/model');
const _ = require('lodash');

Router.get('/', (req, res) => {
    return Promise.resolve(User.findOne({ where: {email: req.user.profile.emails[0].value}, raw: true})
    .then(result => {
        return res.send(result);
    }));
})

module.exports = Router;
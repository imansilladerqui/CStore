
const express = require('express');
const Router = express.Router();
const User = require('../auth/model');
const _ = require('lodash');

Router.get('/', (req, res) => {
    if(!_.isEmpty(globalUser)) {
        return Promise.resolve(User.findOne({ where: {email: globalUser.emails[0].value}, raw: true,})
        .then(result => {
            globalUser.userId = result.id;
            return res.send(globalUser);
        }));
    }
})

module.exports = Router;
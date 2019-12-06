
const express = require('express');
const response = require('../../Network/response');
const Router = express.Router();
const User = require('../auth/model');
const _ = require('lodash');

Router.get('/', (req, res) => {
    if (!_.isEmpty(req.cookies['googleId'])) {
        return User.findOne({ where: {sourceId: req.cookies['googleId']}, raw: true})
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, {}, 500, err);
        });
    } else {
        response.error(req, res, {}, 500, 'No user logged in');
    }
});

module.exports = Router;
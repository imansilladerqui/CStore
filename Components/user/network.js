
const express = require('express');
// const response = require('../../network/response');
const controller = require('./controller');
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

Router.get('/:id', (req, res) => {
    // controller.listUser(req.body)
    // .then(data => {
    //     response.success(req, res, data, 201);
    // })
    // .catch(err => {
    //     response.error(req, res, 'Internal error', 500, err);
    // });
})

module.exports = Router;
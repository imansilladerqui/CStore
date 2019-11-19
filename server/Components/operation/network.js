
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const Router = express.Router();
// const SETUP = require('../../../config');
// const mailgun = require('mailgun-js')({apiKey: SETUP.CONFIG.mailgun_api_key, domain: SETUP.CONFIG.domain});

Router.post('/', (req, res) => {
    controller.addOperation(req.body.operationType, req.body.btcValue, req.body.btcQty, req.body.arsQty, req.body.userId)
    .then(data => {
        // mailgun.messages().send({
        //     from: 'Cambio Posadas <noreply@mailing.cambioposadas.com.ar>',
        //     to: globalUser.emails[0].value,
        //     subject: 'Hello',
        //     text: 'Testing some Mailgun awesomeness!'
        //     }, function (error, body) {
        //         console.log(body);
        // });
        response.success(req, res, data, 201);
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    });
})

Router.get('/:id', (req, res) => {
    controller.getOperations(req.params.id)
    .then(data => {
        response.success(req, res, data, 200);
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    });
})

module.exports = Router;
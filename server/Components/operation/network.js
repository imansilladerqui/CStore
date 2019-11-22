
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const Router = express.Router();
const SETUP = require('../../../config');
const mailgun = require('mailgun-js')({apiKey: SETUP.CONFIG.mailgun_api_key, domain: SETUP.CONFIG.mailgun_domain});
// const mail = require('./operationsuccess.html');''


Router.post('/', (req, res) => {
    controller.addOperation(req.body.operationType, req.body.btcValue, req.body.btcQty, req.body.arsQty, req.body.userId)
    .then(data => {
        let clientData = {
            from: 'Cambio Posadas <noreply@mailing.cambioposadas.com.ar>',
            to: globalUser.emails[0].value,
            subject: 'Nos estaremos contactando',
            text: 'lalalalalal'
        };

        let sellerData = {
            from: 'Cambio Posadas <noreply@mailing.cambioposadas.com.ar>',
            to: 'imansilladerqui@hotmail.com',
            subject: 'Nueva venta',
            text: `usuarioId: ${req.body.userId}, Nombre: ${globalUser.displayName}, Valor del BTC: ${req.body.btcValue}, Cantidad de pesos: ${req.body.arsQty}, BTC solicitados: ${req.body.btcQty}, Tipo de operacion: ${req.body.operationType}`
        };
        mailgun.messages().send(clientData, function (error, body) {
            console.log(body);
            console.log(error);
        });
        mailgun.messages().send(sellerData, function (error, body) {
            console.log(body);
            console.log(error);
        });
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
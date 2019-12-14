
const express = require('express');
const response = require('../../Network/response');
const controller = require('./controller');
const Router = express.Router();
const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
const fs = require('fs');
const path = require('path');
const mail = fs.readFileSync(path.resolve(__dirname, 'operationsuccessclient.html'), 'utf8')


Router.post('/', (req, res) => {

    controller.addOperation(req.body.operationType, req.body.btcValue, req.body.btcQty, req.body.arsQty, req.body.userId)
    .then(data => {
        let clientData = {
            from: 'Cambio Posadas <noreply@mailing.cambioposadas.com.ar>',
            to: req.session.passport.user.profile.emails[0].value,
            subject: 'Nos estaremos contactando',
            html: mail
        };

        let sellerData = {
            from: 'Cambio Posadas <noreply@mailing.cambioposadas.com.ar>',
            to: 'imansilladerqui@hotmail.com',
            subject: 'Nueva venta',
            text: `Nombre: ${req.session.passport.user.profile.displayName}, Contacto: ${req.session.passport.user.profile.emails[0].value}, Valor del BTC: ${req.body.btcValue}, Cantidad de pesos: ${req.body.arsQty}, BTC solicitados: ${req.body.btcQty}, Tipo de operacion: ${req.body.operationType}`
        };
        mailgun.messages().send(clientData, function (error, body) {
            console.log(error);
        });
        mailgun.messages().send(sellerData, function (error, body) {
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
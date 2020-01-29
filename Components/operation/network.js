const express = require('express');
const response = require('../../Network/response');
const controller = require('./controller');
const Router = express.Router();
const SETUP = require('../../config');
const mailgun = require('mailgun-js')({apiKey: SETUP.CONFIG.MAILGUN_API_KEY, domain: SETUP.CONFIG.MAILGUN_DOMAIN});
const fs = require('fs');
const path = require('path');
const mail = fs.readFileSync(path.resolve(__dirname, 'operationsuccessclient.html'), 'utf8')
const ejs = require('ejs-html');

Router.post('/', (req, res) => {

    controller.addOperation(req.body.operationType, req.body.btcValue, req.body.btcQty, req.body.arsQty, req.body.userId, req.body.user, req.body.userPhone)
    .then(data => {
        let comCStore = req.body.comisionCstore;
        let html = ejs.render(mail, {
            arsQty: req.body.arsQty,
            comisionCstore: comCStore,
            btcQty: req.body.btcQty
        }, {
            vars: ['arsQty', 'comisionCstore', 'btcQty']
        })
        let clientData = {
            from: 'Cryptostore <noreply@mailing.cambioposadas.com.ar>',
            to: req.body.user.email,
            subject: 'Nos estaremos contactando',
            html: html
        };

        let sellerData = {
            from: 'Cryptostore <noreply@mailing.cambioposadas.com.ar>',
            to: 'ep@cryptostore.com.ar',
            cc: 'so@cryptostore.com.ar',
            subject: 'Nueva venta',
            text: `Nombre: ${req.body.user.name}, Contacto: ${req.body.user.email}, Valor del BTC: ${req.body.btcValue}, Cantidad de pesos: ${req.body.arsQty}, BTC solicitados: ${req.body.btcQty}, Tipo de operacion: ${req.body.operationType}, telefono: ${req.body.userPhone}`
        };
        mailgun.messages().send(clientData, function (error, body) {
            if (error) { throw error }
        });
        mailgun.messages().send(sellerData, function (error, body) {
            if (error) { throw error }
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
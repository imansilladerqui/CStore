const express = require('express');
const Router = express.Router();
const response = require('../../Network/response');
const request = require('request-promise');

Router.get('/', (req, res) => {
    request({
        "method":"GET", 
        "uri": "https://bitex.la/api/tickers",
        "json": true,
    })
    .then(body => {
        let getDataArs = body.data.find(btcInArs => {
            return btcInArs.id === 'btc_ars';
        });
        response.success(req, res, getDataArs, 200);
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    });
})

module.exports = Router;
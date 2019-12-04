const express = require('express');
const Router = express.Router();
const response = require('../../Network/response');
const request = require('request-promise');

Router.get('/btcvalue', (req, res) => {
    request({
        "method":"GET", 
        "uri": "https://bitex.la/api/tickers",
        "json": true,
    })
    .then(body => {
        let getDataUs = body.data.find(btcInUs => {
            return btcInUs.id === 'btc_usd';
        });
        // let price = parseFloat(getDataUs.attributes.ask);
        var price = parseFloat(getDataUs.attributes.ask)
        let finalPrice = price + (price*0.05);
        response.success(req, res, finalPrice, 200);
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    });
})

module.exports = Router;
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy('/auth/google', {target: 'https://localhost:5000'}));
    app.use(proxy('/auth/logout', {target: 'https://localhost:5000'}));
    app.use(proxy('/btcvalue', {target: 'https://localhost:5000'}));
    app.use(proxy('/clients/btcvalue', {target: 'https://localhost:5000'}));
    app.use(proxy('/operation', {target: 'https://localhost:5000'}));
    app.use(proxy('/user', {target: 'https://localhost:5000'}));
    app.use(proxy('/profile', {target: 'https://localhost:5000'}));
};
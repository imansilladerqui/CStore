const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy('/auth/google', {target: 'https://localhost:5000', changeOrigin: true, secure: false}));
    app.use(proxy('/auth/logout', {target: 'https://localhost:5000', changeOrigin: true, secure: false}));
    app.use(proxy('/btcvalue', {target: 'https://localhost:5000', changeOrigin: true, secure: false}));
    app.use(proxy('/clients/btcvalue', {target: 'https://localhost:5000', changeOrigin: true, secure: false}));
    app.use(proxy('/operation', {target: 'https://localhost:5000', changeOrigin: true, secure: false}));
    app.use(proxy('/user', {target: 'https://localhost:5000', changeOrigin: true, secure: false}));
    app.use(proxy('/profile', {target: 'https://localhost:5000', changeOrigin: true, secure: false}));
};
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000', changeOrigin: true}));
    app.use(proxy('/auth/logout', { target: 'http://localhost:5000', changeOrigin: true}));
    app.use(proxy('/btcvalue', { target: 'http://localhost:5000', changeOrigin: true}));
    app.use(proxy('/clients/btcvalue', { target: 'http://localhost:5000', changeOrigin: true}));
    app.use(proxy('/operation', { target: 'http://localhost:5000', changeOrigin: true}));
    app.use(proxy('/user', { target: 'http://localhost:5000', changeOrigin: true}));
    app.use(proxy('/profile', { target: 'http://localhost:5000', changeOrigin: true}));
};
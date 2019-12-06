
const express = require('express');
const passport = require('passport');
const Router = express.Router();
const SETUP = require('../../config');
const mailgun = require('mailgun-js')({apiKey: SETUP.CONFIG.mailgun_api_key, domain: SETUP.CONFIG.mailgun_domain});
const fs = require('fs');
const path = require('path');
const mail = fs.readFileSync(path.resolve(__dirname, 'successregister.html'), 'utf8');
// Router.get("/facebook", passport.authenticate("facebook"));
// Router.get("/facebook/callback", passport.authenticate("facebook"),
//     (req, res) => {
//         res.redirect('/profile');
//     });


// Router.get("/amazon", passport.authenticate("amazon", {
//     scope: ['profile']
// }));
// Router.get("/amazon/callback", passport.authenticate("amazon"),
//     (req, res) => {
//         res.redirect('/profile');
//     });


// Router.get("/github", passport.authenticate("github"));
// Router.get("/github/callback", passport.authenticate("github"),
//     (req, res) => {
//         res.redirect('/profile');
//     });


Router.get("/google", passport.authenticate("google", {
    prompt: 'select_account',
    scope: ['profile', 'email']
}));
Router.get("/google/callback", passport.authenticate("google"),
    (req, res) => {
        res.cookie('googleId', req.session.passport.user.profile.id, {maxAge: 900000});
        let clientData = {
            from: 'Cambio Posadas <noreply@mailing.cambioposadas.com.ar>',
            to: req.session.passport.user.profile.emails[0].value,
            subject: 'Te logueaste en CryptoStore',
            html: mail
        };
        mailgun.messages().send(clientData, function (error, body) {
            console.log(error);
        });
        res.redirect('/');
    });


// Router.get("/instagram", passport.authenticate("instagram"));
// Router.get("/instagram/callback", passport.authenticate("instagram"),
//     (req, res) => {
//         res.redirect('/profile');
//     });


// Router.get("/spotify", passport.authenticate("spotify"));
// Router.get("/spotify/callback", passport.authenticate("spotify"),
//     (req, res) => {
//         res.redirect('/profile');
//     });


// Router.get("/twitch", passport.authenticate("twitch.js"));
// Router.get("/twitch/callback", passport.authenticate("twitch.js"),
//     (req, res) => {
//         res.redirect('/profile');
//     });

Router.get("/logout", (req, res) => {
    res.clearCookie('googleId');
    res.redirect('/');
});

module.exports = Router;
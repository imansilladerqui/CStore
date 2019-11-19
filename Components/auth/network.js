
const express = require('express');
const passport = require('passport');
const Router = express.Router()

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
    scope: ['profile', 'email']
}));
Router.get("/google/callback", passport.authenticate("google"),
    (req, res) => {
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
    globalUser = {};
    res.redirect('/');
});

module.exports = Router;
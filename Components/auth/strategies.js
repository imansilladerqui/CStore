// const chalk = require('chalk');
// const FacebookStrategy = require('passport-facebook').Strategy;
// const AmazonStrategy = require('passport-amazon').Strategy;
// const GithubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const InstagramStrategy = require('passport-instagram').Strategy;
// const SpotifyStrategy = require('passport-spotify').Strategy;
// const TwitchStrategy = require('passport-twitch.js').Strategy;
// const passport = require('passport');
const authController = require('./controller');
const UserDB = require('./model');

module.exports = (passport) => {

    passport.serializeUser((user, cb) => {
        cb(null, user);
    });

    passport.deserializeUser((user, cb) => {
        cb(null, user);
    });

    // // Facebook Strategy
    // passport.use(new FacebookStrategy({
    //     clientID: SETUP.FACEBOOK.clientID,
    //     clientSecret: SETUP.FACEBOOK.clientSecret,
    //     callbackURL: '/auth/facebook/callback'
    // },
    //     (accessToken, refreshToken, profile, cb) => {
    //         console.log(chalk.blue(JSON.stringify(profile)));
    //         user = {...profile};
    //         return cb(null, profile);
    //     }));


    // // Amazon Strategy
    // passport.use(new AmazonStrategy({
    //     clientID: SETUP.AMAZON.clientID,
    //     clientSecret: SETUP.AMAZON.clientSecret,
    //     callbackURL: '/auth/amazon/callback'
    // },
    //     (accessToken, refreshToken, profile, cb) => {
    //         console.log(chalk.blue(JSON.stringify(profile)));
    //         user = {...profile};
    //         return cb(null, profile);
    //     }));


    // // Github Strategy
    // passport.use(new GithubStrategy({
    //     clientID: SETUP.GITHUB.clientID,
    //     clientSecret: SETUP.GITHUB.clientSecret,
    //     callbackURL: '/auth/github/callback'
    // },
    //     (accessToken, refreshToken, profile, cb) => {
    //         console.log(chalk.blue(JSON.stringify(profile)));
    //         user = {...profile};
    //         return cb(null, profile);
    //     }));

    // Google Strategy
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
        (accessToken, refreshToken, profile, cb) => {
            UserDB.findOne({ where: {sourceId: profile.id} }).then((user) => {
                if(!user) {
                    authController.addUser(profile.displayName, profile.emails[0].value, profile.photos[0].value, profile.provider, profile.id);
                }
            })
            return cb(null, {
                profile: profile,
                token: accessToken
            });
        }));


    // // Instagram Strategy
    // passport.use(new InstagramStrategy({
    //     clientID: SETUP.INSTAGRAM.clientID,
    //     clientSecret: SETUP.INSTAGRAM.clientSecret,
    //     callbackURL: '/auth/instagram/callback'
    // },
    //     (accessToken, refreshToken, profile, cb) => {
    //         console.log(chalk.blue(JSON.stringify(profile)));
    //         user = {...profile};
    //         return cb(null, profile);
    //     }));


    // // Spotify Strategy
    // passport.use(new SpotifyStrategy({
    //     clientID: SETUP.SPOTIFY.clientID,
    //     clientSecret: SETUP.SPOTIFY.clientSecret,
    //     callbackURL: '/auth/spotify/callback'
    // },
    //     (accessToken, refreshToken, profile, cb) => {
    //         console.log(chalk.blue(JSON.stringify(profile)));
    //         user = {...profile};
    //         return cb(null, profile);
    //     }));


    // // Twitch Strategy
    // passport.use(new TwitchStrategy({
    //     clientID: SETUP.TWITCH.clientID,
    //     clientSecret: SETUP.TWITCH.clientSecret,
    //     callbackURL: '/auth/twitch/callback'
    // },
    //     (accessToken, refreshToken, profile, cb) => {
    //         console.log(chalk.blue(JSON.stringify(profile)));
    //         user = {...profile};
    //         return cb(null, profile);
    //     }));
}
const express = require('express');
const auth = require('../Components/auth/network');
const user = require('../Components/user/network');
const operation = require('../Components/operation/network');

const Routes = ((server)=>{
    server.use('/auth', auth);
    server.use('/user', user);
    server.use('/operation', operation);
});

module.exports = Routes;
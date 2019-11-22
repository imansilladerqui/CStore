const cryptousers = require('./model');

function addUser(user) {
    const myUser = new cryptousers(user);
    return myUser.save();
}

module.exports = {
    add: addUser
}
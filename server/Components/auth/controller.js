const store = require('./store');

function addUser(name, email, imageUrl, googleId) {
    if (!name) {
        return Promise.reject('Invalid Name');
    }

    const user = {
        name: name,
        email: email,
        imageUrl: imageUrl,
        googleId: googleId
    }
    
    return store.add(user);
}

module.exports = {
    addUser
}
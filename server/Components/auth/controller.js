const store = require('./store');

function addUser(name, email, imageUrl, source, sourceId) {
    if (!name) {
        return Promise.reject('Invalid Name');
    }

    const user = {
        name: name,
        email: email,
        imageUrl: imageUrl,
        source: source,
        sourceId: sourceId
    }
    
    return store.add(user);
}

module.exports = {
    addUser
}
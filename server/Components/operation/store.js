const cryptooperations = require('./model');

function addOperation(operation) {

    const userOperation = new cryptooperations(operation);
    return userOperation.save();
}

module.exports = {
    addOperation: addOperation
}
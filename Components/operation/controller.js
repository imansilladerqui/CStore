const store = require('./store');
const Operation = require('./model');
const User = require('../auth/model');

User.hasMany(Operation, {foreignKey: 'id', targetKey: 'userId'} );
Operation.belongsTo(User, {foreignKey: 'id'});


function addOperation(operationType, btcValue, btcQty, arsQty, userId) {
    
    const operation = {
        userId: userId,
        operationType: operationType,
        btcValue: btcValue,
        btcQty: btcQty,
        arsQty: arsQty
    }

    return store.addOperation(operation);
}

function getOperations(id) {
    return Operation.findAll({ where: {userId: id}, include: [{model: User}]})
}

module.exports = {
    addOperation,
    getOperations
}
const Sequelize = require('sequelize');
const db = require('../../db');

module.exports = db.define("operations", {
    id: {
        type: Sequelize.INTEGER(50),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER(10)
    },
    operationType: {
        type: Sequelize.STRING(10)
    },
    btcValue: {
        type: Sequelize.INTEGER(50)
    },
    btcQty: {
        type: Sequelize.STRING(50)
    },
    arsQty: {
        type: Sequelize.STRING(50)
    }
});
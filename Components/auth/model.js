const Sequelize = require('sequelize');
const db = require('../../db');


module.exports = db.define("users", {
    id: {
        type: Sequelize.INTEGER(50),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    imageUrl: {
        type: Sequelize.STRING(250)
    },
    source: {
        type: Sequelize.STRING(250),
        allowNull: false
    },
    sourceId: {
        type: Sequelize.STRING(250),
        allowNull: false
    },
    tel: {
        type: Sequelize.STRING(250)
    },
});
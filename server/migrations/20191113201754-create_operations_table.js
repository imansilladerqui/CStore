'use strict';

const Users = require('../Components/auth/model');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('operations', {
      id: {
        type: Sequelize.INTEGER(50),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userId : {
        type : Sequelize.INTEGER(10),
        references : {
          model : 'Users',
          key : 'id',
          as : 'userId'
        }
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
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('operations')
  }
};

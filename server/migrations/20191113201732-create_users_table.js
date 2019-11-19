'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
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
      googleId: {
          type: Sequelize.STRING(250),
          allowNull: false,
          unique: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'source',
         Sequelize.STRING
       ),
      queryInterface.addColumn(
        'users',
        'sourceId',
        Sequelize.STRING
      ),
      queryInterface.removeColumn('users', 'googleId'),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'source'),
      queryInterface.removeColumn('users', 'sourceId')
    ]);
  }
};

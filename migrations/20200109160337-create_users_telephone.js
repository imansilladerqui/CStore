'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'tel',
         Sequelize.STRING
       )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'tel')
  }
};
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Authors', 'id', {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }),
      queryInterface.changeColumn('Authors', 'name', {
        type: Sequelize.STRING,
      })

    ]);
  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Authors');
  }
};

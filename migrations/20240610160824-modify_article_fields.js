'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('articles', 'name', {
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.changeColumn('articles', 'slug', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });

    await queryInterface.changeColumn('articles', 'image', {
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.changeColumn('articles', 'body', {
      type: Sequelize.TEXT,
      allowNull: false
    });

    await queryInterface.changeColumn('articles', 'published', {
      type: Sequelize.DATE,
      allowNull: false
    });

    await queryInterface.changeColumn('articles', 'author_id', {
      type: Sequelize.INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert changes as needed
    await queryInterface.changeColumn('articles', 'name', {
      type: Sequelize.STRING,
      allowNull: true // Adjust as per initial schema
    });

    await queryInterface.changeColumn('articles', 'slug', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false // Revert unique constraint if it wasn't initially there
    });

    await queryInterface.changeColumn('articles', 'image', {
      type: Sequelize.STRING,
      allowNull: true // Adjust as per initial schema
    });

    await queryInterface.changeColumn('articles', 'body', {
      type: Sequelize.TEXT,
      allowNull: true // Adjust as per initial schema
    });

    await queryInterface.changeColumn('articles', 'published', {
      type: Sequelize.DATE,
      allowNull: true // Adjust as per initial schema
    });

    await queryInterface.changeColumn('articles', 'author_id', {
      type: Sequelize.INTEGER,
      allowNull: true // Adjust as per initial schema
    });
  }
};

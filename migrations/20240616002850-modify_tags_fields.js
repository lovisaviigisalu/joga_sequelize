'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.changeColumn('Tags', 'id', {
                type: Sequelize.INTEGER,  // 'Type' should be 'type'
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            }),
            queryInterface.changeColumn('Tags', 'name', {
                type: Sequelize.STRING,  // 'Type' should be 'type'
                allowNull: false
            }),
            queryInterface.changeColumn('Tags', 'createdAt', {
                type: Sequelize.DATE,  // 'Type' should be 'type'
                allowNull: false
            }),
            queryInterface.changeColumn('Tags', 'updatedAt', {
                type: Sequelize.DATE,  // 'Type' should be 'type'
                allowNull: false
            })
        ]);
    },

    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('Tags');
    }
};

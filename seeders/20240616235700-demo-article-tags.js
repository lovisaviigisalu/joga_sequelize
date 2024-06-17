'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.bulkInsert('ArticleTags', [{
          articleId: 31,
          tagId: 1,
          createdAt: new Date(),
          updateAt: new Date()
        }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 31,
        tagId: 2,
        createdAt: new Date(),
        updateAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 32,
        tagId: 1,
        createdAt: new Date(),
        updateAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 32,
        tagId: 3,
        createdAt: new Date(),
        updateAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 33,
        tagId: 4,
        createdAt: new Date(),
        updateAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 33,
        tagId: 4,
        createdAt: new Date(),
        updateAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 33,
        tagId: 6,
        createdAt: new Date(),
        updateAt: new Date()
      }]),
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ArticleTags')
  }
};

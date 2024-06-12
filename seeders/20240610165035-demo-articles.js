'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
   return Promise.all([
       queryInterface.bulkInsert('articles', [{
         name: 'Introduction to Ashtanga',
         slug: 'introduction-to-ashtanga',
         image: 'ashtanga.jpg',
         body: '<p> Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
         published: '2020-02-08 14:23:45',
         createdAt: new Date(),
         updatedAt: new Date()
       }]),
     queryInterface.bulkInsert('articles', [{
       name: 'Morning vinyasa flow routine',
       slug: 'morning-vinyasa-flow-routine',
       image: 'morning.jpg',
       body: '<p> Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
       published: '2020-08-02 10:51:21',
       createdAt: new Date(),
       updatedAt: new Date()
     }]),
     queryInterface.bulkInsert('articles', [{
       name: 'Secrets of a yoga teacher',
       slug: 'secret-of-a-yoga-teacher',
       image: 'yoga-teacher.jpg',
       body: '<p> Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
       published: '2023-11-03 11:50:11',
       createdAt: new Date(),
       updatedAt: new Date()
     }]),
   ])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Articles', null, {});
  }
};

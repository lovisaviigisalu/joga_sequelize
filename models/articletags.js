'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ArticleTags extends Model {}
  ArticleTags.init({
    articleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Articles',
        key: 'id'
      }
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tags',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ArticleTags',
  });
  return ArticleTags;
};

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      this.belongsTo(models.Author, {
        foreignKey: {
          name: 'Author_id',
          field: 'author_id'
        }
      });
      this.belongsToMany(models.Tags, {
        through: models.ArticleTags,
        foreignKey: 'articleId',
        otherKey: 'tagId'
      });
    }
  }
  Article.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};

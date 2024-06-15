const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://user:user@localhost:3306/joga_sequelize');
const models = require('../models');

const getAllArticles = async (req, res) => {
    try {
        const articles = await models.Article.findAll({
            include: [{
                model: models.Author,
                as: 'author'
            }]
        });
        return res.status(200).json({ articles });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getArticleBySlug = async (req, res) => {
    try {
        const article = await models.Article.findOne({
            where: { slug: req.params.slug },
            include: [{
                model: models.Author,
                as: 'author'
            }]
        });
        return res.status(200).json({ article });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
const getArticlesByAuthor = async (req, res) => {
    try {
        const authorId = req.params.id;
        // Fetch the author and their associated articles
        const author = await models.Author.findByPk(authorId, {
            include: [{
                model: models.Article,
                as: 'articles'
            }]
        });

        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }

        return res.status(200).json({ author });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    getAllArticles,
    getArticleBySlug,
    getArticlesByAuthor
};

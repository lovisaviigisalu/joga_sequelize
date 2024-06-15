const express = require('express');
const router = express.Router();
const ArticleController = require('../Controllers/article')
const authorController = require('../Controllers/article')

router.get('/', ArticleController.getAllArticles);
router.get('/article/:slug', ArticleController.getArticleBySlug);
router.get('/author/:id', authorController.getArticlesByAuthor);


module.exports = router;
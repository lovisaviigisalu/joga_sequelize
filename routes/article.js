const express = require('express');
const router = express.Router();
const ArticleController = require('../Controllers/article')
const authorController = require('../Controllers/article')
const articleAdminController = require('../Controllers/admin/articles')

router.get('/', ArticleController.getAllArticles);
router.get('/article/:slug', ArticleController.getArticleBySlug);
router.get('/author/:id', authorController.getArticlesByAuthor);
router.post('/admin/article/create', articleAdminController.createArticle)

module.exports = router;
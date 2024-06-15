const express = require('express');
const router = express.Router();
const ArticleController = require('../Controllers/article')

router.get('/', ArticleController.getAllArticles)

module.exports = router;
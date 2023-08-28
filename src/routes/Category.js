const categoryRouter = require('express').Router();
const { categoryController } = require('../controllers');
const authMiddleware = require('../middlewares/Auth');

categoryRouter.post('/', authMiddleware, categoryController.createCategory);
categoryRouter.get('/', authMiddleware, categoryController.getAllCategories);

module.exports = categoryRouter;

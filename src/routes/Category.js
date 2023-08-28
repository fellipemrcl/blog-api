const categoryRouter = require('express').Router();
const { categoryController } = require('../controllers');
const authMiddleware = require('../middlewares/Auth');

categoryRouter.post('/', authMiddleware, categoryController.createCategory);

module.exports = categoryRouter;

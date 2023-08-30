const postRouter = require('express').Router();
const { postController } = require('../controllers');
const authMiddleware = require('../middlewares/Auth');

postRouter.post('/', authMiddleware, postController.createPost);
postRouter.get('/', authMiddleware, postController.getPosts);
postRouter.get('/:id', authMiddleware, postController.getPostById);

module.exports = postRouter;
const postRouter = require('express').Router();
const { postController } = require('../controllers');
const authMiddleware = require('../middlewares/Auth');

postRouter.get('/', authMiddleware, postController.getPosts);
postRouter.get('/:id', authMiddleware, postController.getPostById);
postRouter.post('/', authMiddleware, postController.createPost);
postRouter.put('/:id', authMiddleware, postController.updatePost);

module.exports = postRouter;
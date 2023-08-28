const userRouter = require('express').Router();
const { userController } = require('../controllers');
const authMiddleware = require('../middlewares/Auth');

userRouter.post('/', userController.createUser);

userRouter.get('/', authMiddleware, userController.getAllUsers);

userRouter.get('/:id', authMiddleware, userController.getUserById);

module.exports = userRouter;
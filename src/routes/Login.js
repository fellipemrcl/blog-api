const loginRouter = require('express').Router();
const { loginController } = require('../controllers');

loginRouter.post('/', loginController.userLogin);

module.exports = loginRouter;
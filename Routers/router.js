const { Router } = require('express');
const {userController} = require('../Controllers/user.ctrl');


const userRouter = new Router();
module.exports = { userRouter };

// userRouter.get('/',userController.getUsers)


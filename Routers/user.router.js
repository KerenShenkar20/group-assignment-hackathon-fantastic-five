// Change the name of the file if neededconst { Router } = require('express');
const { Router } = require('express');
const {userController} = require('../Controllers/user.ctrl');


const userRouter = new Router();
module.exports = { userRouter };

userRouter.get('/',userController.getUsers);
userRouter.get('/:id',userController.getUser);
userRouter.get('/:id',userController.getUser);
userRouter.get('/:id',userController.getUser);
userRouter.put('/:id',userController.updateUser);
userRouter.delete('/:id',userController.deleteUser);








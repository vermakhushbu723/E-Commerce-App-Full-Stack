import express from 'express';

const router=express.Router();
import userController, { UserController } from './user.controll.js';

const userController=new UserController();

router.post('/signUp',userController.SignUp);
router.post('/signIn',userController.SignIn);

export default router;
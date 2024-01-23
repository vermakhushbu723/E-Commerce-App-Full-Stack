import express from 'express';
import { UserModule } from './user.model.js';

export class UserController{
    SignUp(req,res){
        const {name,email,usertype,passwor}=req.body
        const user=UserModule.SignUp(name,email,usertype,password)
        res.status(201).send(user);
    }
    
    SignIn(req,res){
        
    }
}
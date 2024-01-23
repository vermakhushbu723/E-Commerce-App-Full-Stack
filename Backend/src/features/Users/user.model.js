// import mongoose from 'mongoose';

export class UserModule{
    constructor(name ,email, usertype , password){
        this.name=name,
        this.email=email,
        this.usertype=usertype,
        this.password=password
    }
    static SignUp(name,email,usertype,password){
        const newUser=new UserModule(name,email,usertype,password);
         users.push(newUser)
    }
    static SignIn(email,password){
        const user=new users.find((u)=>u.email==email&&u.password==password);
        return user;
    }
}
var users=[{
    "name":"khushbu",
    "email":"khushbu@gmail.com",
    "usertype":"superadmin",
    "password":"123"
}]
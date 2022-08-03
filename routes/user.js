const express=require("express");
const users=require("../uselist");
const userRouter=express.Router();




//post user
userRouter.post('/login',(req,res)=>{
    let email=req.email.body;
    let password=req.password.body;
    res.send({msg:`your email is ${email} and your password is ${password}`});
    console.log(res);
})
//get user by id

//get all user
userRouter.get('/',(req,res)=>res.send({listusers:users}))

//put user

//delete user

module.exports=userRouter;
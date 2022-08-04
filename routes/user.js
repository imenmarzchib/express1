const express=require("express");
const users=require("../uselist");
const userRouter=express.Router();




//post user
userRouter.post('/login',(req,res)=>{
    try {
        let email=req.body.email;
    let password=req.body.password;
    res.send({msg:`your email is ${email} and your password is ${password}`});
 
    } catch (error) {
        console.log(error)
    }
   
})
//get user by id

//get all user
userRouter.get('/',(req,res)=>{
const date=new Date();
const hours=date.getHours();
if(hours>8 && hours<18){
    res.render("opened");
}
else{
    res.render("closed");
}
});

//put user

//delete user

module.exports=userRouter;
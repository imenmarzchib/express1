const express=require("express");

const app=express();
app.use(express.json());

app.use("/user",require("./routes/user"))
// app.get('/user', (req,res)=>res.send('hello'))
app.listen(5000, (error)=>error?console.log(error):console.log("server is running"))

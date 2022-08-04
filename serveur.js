const express=require("express");

const app=express();

app.use(express.json());
app.set("view engine","ejs");
app.use("/user",require("./routes/user"))

// app.get('/user', (req,res)=>res.send('hello'))
app.listen(5001, (error)=>error?console.log(error):console.log("server is running"))

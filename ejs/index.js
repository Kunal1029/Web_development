const express = require('express');
const app =  express();
const  path = require("path")

const port = 8000;

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname,"/views"));
// app.get("/" ,(req,res)=>{
//     res.send("HoMe")
// })

app.get("/",(req,res)=>{
    res.render("home.ejs") // express by default search "views" folder when we use res.render file 
})



app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
// const express = require('express');
// const app = express();

// console.log(typeof app)
// // console.dir(app)

// const port = 3100;

// console.dir("Port - logical endpoint of a network connection that is used to exchange information between a web server and a web client.")



// app.listen(port, ()=>{
//     console.log(`server start on port ${port}`)
// })
//listen - it creates web server which listen incoming api requests


const express = require('express')
const app = express();
const port = 2100

console.log(typeof app)


// app.use((req,res)=>{
//     console.log("request received")
//     // res.send("this is a basic response")
//     res.send(
//         // console.log("this is basic response")
//         {

//         name:"kunal",
//         color:"red"
//     })
// })

app.get("/", (req, res) => {
    res.send("you contacted root path")
})
app.get("/orange", (req, res) => {
    res.send("you contacted orange path")
})
app.get("/apple", (req, res) => {
    res.send("you contacted apple path")
})

// app.get("*",(req,res)=>{ //this is for custom request path which is not defined at backend then we can give response 
//     res.send("this path does not exist")
// })

app.post("/", (req, res) => {
    res.send("u send a post request")
})

// app.get("/:username",(req,res)=>{ 
//     console.log(req.params)
//     res.send(`only username hello i am root , username - ${username}`)
// })
app.get("/:username/:id", (req, res) => {
    // console.log(req.params)
    const { username, id } = req.params
    const htmlstr = `<h1>only username with id : @${username} and id - @${id}</h1>`//   
    res.send(htmlstr) //res.send(`only username with id : @${username} and id - @${id}`) 
})


//search query

app.get("/search", (req, res) => { //search like localhost:2100/search?q="apple"
    // console.log(req.query)
    let { q } = req.query;
    if (!q) {
        res.send("nothing searched")
    } 
    else {
        res.send(`search result for ${q}`);
    }
})

app.listen(port, () => {
    console.log(`server port start : ${port}`)
})
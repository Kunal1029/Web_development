const mongoose = require('mongoose')
const connectdb = ()=>{
    return mongoose.connect('mongodb://127.0.0.1:27017/DB_TIll_Db')

    .then(()=>{
        console.log("Connected Successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
} 

module.exports =  connectdb
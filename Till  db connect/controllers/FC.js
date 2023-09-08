// const bcrypt = require('bcrypt')

class FC {
    static index = (req,res)=>{
        try {
            res.render('index')
        } catch (error) {
            console.log(error)
        }
    }
    static login = (req,res)=>{
        try {
            res.render('login',{msg: req.flash('success')})// ,{msg:req.flash('error')} - this line adds for security
        } catch (error) {
            console.log(error)
        }
    }
    static registration = (req,res)=>{
        try {
            res.render('registration',{msg: req.flash('error')}) // ,{msg:req.flash('error')} - this line adds for security
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = FC
const userModel = require('../models/user')
const bcrypt = require('bcrypt')

class UserController {
    static UserInsert = async(req,res)=>{
        try {
             console.log(req.body) // this line can only send form data in console
             const {n,e,ph,ps,cp} = req.body
             //security
             const user = await userModel.findOne({email:e})
             if(user){
                req.flash('error','Email already exit')
                res.redirect('/registration')

             }
             else{
                if(n && e && ph && ps ){
                    if(ps && cp){
                        const hashpassword = await bcrypt.hash(ps,10)
                        const result = new userModel({
                            name:n,
                            email:e,
                            phone:ph,
                            password:hashpassword
                        })
                        await result.save()
                        req.flash('success','registration successfully Please login')
                        res.redirect('/')
                    }
                    else{
                        req.flash('error','Both password should be same')
                        res.redirect('/registration')
        
                    }

                }else{
                    req.flash('error','all fields are required')
                    res.redirect('/registration')
    
                    }
                }
             
             //securiy ends
            //  const result = new userModel({
            //      name:n,
            //      email:e,
            //      phone:ph,
            //      password:ps
            //  })
            //  await result.save()
            //  res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserController
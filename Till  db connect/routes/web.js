const express  = require('express')
const router = express.Router()
const FC = require('../controllers/FC')
const user = require('../controllers/UC')


router.get('/',FC.login)
router.get('/index',FC.index)
router.get('/registration',FC.registration)
    

//user insert
router.post('/user_insert',user.UserInsert)

module.exports = router
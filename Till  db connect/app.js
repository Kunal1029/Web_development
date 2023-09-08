const express = require('express')
const app = express();
const port = 9100;
const web = require('./routes/web')
const connectdb = require('./db/ConnectDB')

//security or message show 
let session = require('express-session')
let flash = require('connect-flash');

app.use(session({
    secret: 'secret',
    cookie: {maxAge:60000},
    resave: false,
    saveUninitialized: false,

}));

app.use(flash());
//security end or message show ends


//ejs connection
app.set('view engine','ejs')

//media adding
app.use(express.static('public'))

//call db
connectdb();

// data get of registration form
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

//routes load
app.use('/',web)


//server creates
app.listen(port,()=>{
    console.log(`server starts at ${port}`)
})

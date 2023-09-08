what is Templating?

Templating is like a blueprint or skeleton which used mutliple times by coping according to our needs of that skeleton.

EJS - (Embedded JS Templates) // embedded - to fix something firmly(strongly) and deeply (in something else)

EJS is a simple templating language that lets us generate HTML markup with plain JavaScript.

we can use different tools to achieve templating like handlebars, ejs etc

//app.set("view engine" , "ejs");

why we don't require ""ejs"" , coz we use every package by require ?

Becaz express by default require ejs internally.

//app.set - this used to set different things
and we set "view engine" .

view engine - templates engine (which used to render these templates by ejs)


app.set("view engine" , "ejs");
app.get("/" ,(req,res)=>{
    res.send("HoMe")
})

we dont send responses by ejs like above ( res.send("HoMe")) but we render responses (res.render("Home.ejs")) like below.

app.get("/" ,(req,res)=>{
    res.render("Home.ejs")
})

render means - sending files

res.send - we can send obj, any string ,  array , html .

res.render - we can send big file which include together css, html , js. in the form of file etc.

also we dont send or render normal file but we can .ejs file which created inside "views" folder like (home.ejs , about.ejs etc).

If we want to run nodemon outside current directory then we cannot see or render .ejs file directly. So we require below and set "path" package which allow us to see .ejs files inside views folder. For this see below


const  path = require("path")
app.set("views", path.join(__dirname,"/views"));

views joins __dirname - outsidedirectory/ejsdir/views.
Means express search "views" on __dirname path







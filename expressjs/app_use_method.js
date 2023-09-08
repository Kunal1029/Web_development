//app.use - method.object

app.use((req,res) =>{
    console.log("new incoming request")
    console.log("request received")
    console.log("app.use - this listen all type of request like get post request in url")
})

console.log("(req,res) -this is callback function which execute when server gets any request")

console.log("when we send any request to url , and http request send in text based request, and express convert this text-based url http request into object form. this called parsing the request")
console.log("all http request is text based for listen , and express convert this into object request")









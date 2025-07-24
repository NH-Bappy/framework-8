const express = require("./app");
const brypt = require("./encrypt");
const app = new express();
const password = new brypt;
const port = 3000;

app.use((req , res , next) => {
    console.log("this is middleWare function 1")
    next()
})

app.use((req , res , next) => {
    console.log("this is middleWare function 2")
    next()
})

app.get("/about" , (req , res)=>{
    const hashPass = password.hashPassword("1234")
    console.log(hashPass)
    res.end("where is the routes" + hashPass)
});
app.get("/get" , ()=>{
    console.log("where is")
});
app.get("/who" , ()=>{
    console.log("where is the ")
});
app.post("/submit" , ()=>{});
app.delete("remove" , ()=>{});



app.listen(port , () => {
    console.log(`server running on http://localhost:${port}`)
})

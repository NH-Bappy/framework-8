const express = require("./app");
const app = new express();
const port = 3000;



app.use(() => {
    console.log("this is middleWare function 1")
})

app.use(() => {
    console.log("this is middleWare function 2")
})

app.get("/about" , (req , res)=>{
    res.end("where is the routes")
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
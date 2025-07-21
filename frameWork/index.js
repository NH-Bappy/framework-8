const express = require("./app");
const app = new express();
const port = 3000;

app.listen(port , () => {
    console.log(`server running on http://localhost:${port}`)
})

app.get("/about" , ()=>{});
app.post("/submit" , ()=>{});
app.delete("remove" , ()=>{});
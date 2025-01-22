const express = require("express");
const app = express();


app.get("/" ,(req , res) =>{
    console.log("This is a Home Page")
    res.send("This is A Home Page");
})

app.listen(8080, () =>{
    console.log("Server is listning To the port 8080")
})
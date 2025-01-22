const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const mongoose = require('mongoose');


main().then(() =>{
    console.log("Connected to the DB");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

}


app.get("/" ,(req , res) =>{
    console.log("This is a Home Page")
    res.send("This is A Home Page");
})

app.listen(8080, () =>{
    console.log("Server is listning To the port 8080")
})
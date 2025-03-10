const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth")
const ExpressError = require("./utils/error");

dotenv.config();

const mongoose = require('mongoose');


main().then(() =>{
    console.log("Connected to the DB");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

}

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/" ,(req , res) =>{
    console.log("This is a Home Page")
    res.send("This is A Home Page");
});

app.use("/" , userRoute);
app.use("/" , authRoute);




app.use((err , req , res , next) =>{
    const statuscode = err.statuscode || 500;
    const message = err.message || "internal server error";
    res.status(statuscode).json({
        success: false,
        statuscode,
        message
    })
})




app.listen(8080, () =>{
    console.log("Server is listning To the port 8080")
})
const express= require("express");

const router = express.Router();
const authcontroller = require("../controller/auth")

router.post("/signup" ,authcontroller.signup );

module.exports = router;
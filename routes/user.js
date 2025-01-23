const express = require("express");

const router = express.Router();
const usercontroller = require("../controller/user")

router.get("/test" ,usercontroller.test);


module.exports = router;
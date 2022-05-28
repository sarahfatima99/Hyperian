const express = require('express');
const cors = require("cors");
const app = express()
const sql = require('./../DBconfig');
const router = express.Router({ mergeParams: true })


router.get('/',(req,res)=>{

    console.log(req)


})


module.exports = router
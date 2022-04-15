const express = require('express');
const cors = require("cors");
const app = express()
app.use(express.json());
app.use(cors())
app.use(express.urlencoded())


app.get("/", (req, res) => {

    
    res.send("My api");

})


const loginRouter=require('./auth/login')
const signupRouter=require('./auth/signup')
const formRouter=require('./routes/form')


app.use('/login',loginRouter)
app.use('/register',signupRouter)
app.use('/form',formRouter)



app.listen(9000, () => {

    console.log("listening to port 9000")
})


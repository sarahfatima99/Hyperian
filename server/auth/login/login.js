
const express = require('express');
const cors = require("cors");
const app=express()
app.use(express.json());
app.use(cors())
app.use(express.urlencoded())
const bcrypt = require("bcrypt");

app.post("/login",(req,res)=>{
    var request = new sql.Request();
    const {
        email,
        password
    }=req.body
    console.log(email)
    request.query(`select * from  [Hyperian].[dbo].[Users] where Email = '${email}'`, function (err, recordset){
      
        if(recordset['recordset'][0]){


            bcrypt.compare(password, recordset['recordset'][0].Password, (err, results) => {
                if (err)
                    throw err
                if (results === true)
                 { 
                    res.send({message:"user logged in",user:recordset['recordset'][0]})
                 }

                else 
                {
                    res.send({message:"incorrect password"});
                }
            })
           
        
    }
    else{
        res.send({message:"user not found"})
    }

})
})
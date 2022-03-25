

const express = require('express');
const cors = require("cors");
const app=express()
app.use(express.json());
app.use(cors())
app.use(express.urlencoded())
const bcrypt = require("bcrypt");


app.post("/register",(req,res)=>{
    ;
    // console.log(req.body);
    bcrypt.hash(req.body.password, 10).then((hash)=>{
        var request = new sql.Request()
        const name=req.body.name
        const email=req.body.email
        const password=hash
        request.query(`select * from  [Hyperian].[dbo].[Users] where Email = '${email}'`, function (err, recordset)
        { console.log(recordset);
            if (recordset['recordset'][0]){
                res.send({message:"user already registered"})
            }
            else{
                request.query(`INSERT INTO [Hyperian].[dbo].[Users] VALUES ('${name}', '${email}','${password}')`, function (err, recordset) {
            
                    if (err) console.log(err)
        
                   
                    res.send({message:"user registered"})
                    
                });
          
            }
        })
    
})
})
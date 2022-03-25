


app.post("/register",(req,res)=>{
    // console.log(req.body);
 
    const {
        name,
        email,
        password
    }=req.body
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
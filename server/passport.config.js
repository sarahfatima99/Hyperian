const bcrypt = require('bcrypt')
const localStrategy = require('passport-local').Strategy



module.exports = function (passport) {
console.log(passport)
    passport.use(
       
        new localStrategy({userNameField:"email",passwordField:"password"},(email, password, done) => {
            console.log("hi");
            request.query(`select * from  [Hyperian].[dbo].[Users] where Email = '${email}'`, function (err, recordset) {
           
                if (recordset['recordset'][0]) {

                    bcrypt.compare(password, recordset['recordset'][0].Password, (err, results) => {
                        if (err)
                            throw err
                        if (results === true)
                         { 
                            return done(null, recordset['recordset'][0]) 
                         }

                        else 
                        {
                            return done(null, false)
                        }
                    })
                }
                

            }
            )
        })
   
        )

        passport.serializeUser((user,cb)=>{
            cb(null,user)
        })
        
        passport.deserializeUser((id,cb)=>{
            request.query(`select * from  [Hyperian].[dbo].[Users] where Email = '${id}'`,  (err, recordset) =>{
                const userInformation = {
                    username: recordset['recordset'][0].name,
                  };
             cb(err,userInformation)
            })
        }
        
        )

}



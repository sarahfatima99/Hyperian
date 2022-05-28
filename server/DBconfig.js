var sql = require("mssql");
const dotenv=require('dotenv')
dotenv.config()

const config = {
    user:process.env.USER ,
    password: process.env.PASSWORD ,
    server: process.env.SERVER,
    database: process.env.DATABASE,


    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true

    },
    port:parseInt(process.env.PORT)

};



sql.connect(config, function (err) {
    if (err) console.log(err);
    console.log("connected")
  
});


exports.sql=sql
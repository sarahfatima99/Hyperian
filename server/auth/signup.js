const express = require('express');
const cors = require("cors");
const app = express()
app.use(express.json());
app.use(cors())
app.use(express.urlencoded())
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const e = require('connect-flash');
const sql = require('./../DBconfig')
const router = express.Router()

router.post("/", (req, res) => {
    var request = new sql.sql.Request()
    bcrypt.hash(req.body.password, 10).then((hash) => {

        const name = req.body.name
        const email = req.body.email
        const password = hash

        request.query(`select * from  [Hyperian].[dbo].[Users] where Email = 
        '${email}'`, function (err, recordset) {

            if (err) {
                console.log(err)
            }
            else if (recordset['recordset'][0]) {
                res.send({ message: "user already registered" })
            }
            else {
                request.query(`INSERT INTO [Hyperian].[dbo].[Users] OUTPUT Inserted.ID  VALUES ('${name}', '${email}','${password}')`, function (err, recordset) {
                    console.log(recordset)
                    if (err) {
                        console.log(err)
                    }

                    else {
                        res.send({ message: "user registered", user_id: recordset['recordset'][0]['ID'] })
                    }
                });

            }
        })

    })
})

module.exports = router
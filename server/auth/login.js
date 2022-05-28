const express = require('express');
const cors = require("cors");
const app = express()
app.use(express.json());
app.use(cors())
app.use(express.urlencoded())
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const sql=require('./../DBconfig')
const router=express.Router()

router.post("/", (req, res) => {
    var request = new sql.sql.Request()
    const {
        email,
        password
    } = req.body
    var id = 0;
    var form_id = 0;

    request.query(`select * from  [Hyperian].[dbo].[Users] where Email = '${email}'`, function (err, recordset) {
   
        if (recordset['recordset'][0]) {


            bcrypt.compare(password, recordset['recordset'][0].Password, (err, results) => {
                if (err)
                    throw err
                if (results === true) {
                    id = recordset['recordset'][0].ID

                    const token = jwt.sign({ id }, "jwtSecret", {
                        expiresIn: 300
                    })


                    res.json({ auth: true, token: token, result: recordset['recordset'][0].ID })

                }

                else {
                    res.send({ auth: false, message: "incorrect password" });
                }
            })


        }
        else {
            res.send({ auth: false, message: "user not found" })
        }

    })
})


const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if (!token) {
        res.send("we need a token pls give it to us")
    }
    else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "U FAILED TO AUTHENTICATE" })

            }
            else {
                req.userId = decoded.id
                next();
            }
        })
    }

}


router.get('/isUserAuth', verifyJWT, (req, res) => {
    res.send('Authenticated')
})

module.exports= router
const express = require('express');
const cors = require("cors");
const app = express()
const sql = require('./../DBconfig');
const router = express.Router({ mergeParams: true })

app.use(express.json());
app.use(cors())
app.use(express.urlencoded())

router.post('/', (req, res) => {
    var request = new sql.sql.Request()
    const user_id = req.body.user_id;

    request.query(`INSERT INTO [Hyperian].[dbo].[Form] (User_id) OUTPUT Inserted.Form_id VALUES('${user_id}')`, function (err, recordset) {

        if (err) {
            console.log(err)

            res.send({ message: "Form registered FAILED" })
        }
        else {
            res.send({ message: "Form registered", form_id: recordset['recordset'][0]['Form_id'] })

        }
    });

})


router.post('/question', (req, res) => {
    var request = new sql.sql.Request()
    const Question_number = req.body.Ques_no
    const form_id = req.body.form_id
    const label = req.body.label
   
    if (label == '') {
        const Question_type = req.body.type
        var ques_query=`INSERT INTO [Hyperian].[dbo].[Questions] ( Question_number, Question_type,Form_id) OUTPUT Inserted.Question_id VALUES('${Question_number}', (SELECT  Question_code FROM [Hyperian].[dbo].[Question_type]  WHERE Question_type = '${Question_type}'),${form_id})`
        request.query(ques_query, function (err, recordset)
         {
            if (err) {
                console.log(err)
            }
            else {

                res.send({ ques_id: recordset['recordset'][0].Question_id })

            }

        })


    }
    else {

        request.query(`UPDATE [Hyperian].[dbo].[Questions] set Question_text='${label}' where Form_id='${form_id}' and Question_number='${Question_number}'`, function (err, recordset) {

            if (err) {
                console.log(err)
            }
            else {
                console.log('success')

            }

        })


    }
}
)


module.exports = router
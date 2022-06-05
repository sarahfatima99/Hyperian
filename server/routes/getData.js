const express = require('express');
const cors = require("cors");
const app = express()
const sql = require('./../DBconfig');
const router = express.Router({ mergeParams: true })

var request = new sql.sql.Request()
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
router.get('/', async (req, res) => {

    const payload = {}
    payload.user = {}
    payload.form = []
    const user_id = parseInt(req.query['userId'])
    var data = {}

    const query = `select u.name , 
    f.FormTitle,
    f.FormId,
    F.FormDescription,
    Q.QuestionId,
    Qt.QuestionType,
    Q.questionNumber,
    Q.questionText,
    Q.questionDetail,
    o.AnswerText
    from ((((FormDetails f inner join Users u on f.userId=u.Id and u.Id='${user_id}') 
    left join questionDetails q on f.FormId=q.formId)
    inner join QuestionType qt on qt.QuestionId=q.questionType) 
    left join options o on q.QuestionId=o.QuestId)`

    request.query(query, function (err, recordset) {
        if (err) {
            console.log(err)
        }
        else {
            data = recordset['recordset']
            console.log(data)
            if (data) {
                for (let i = 0; i < data.length; i++) {
                    payload.user.userName = data[i].name
                    var found = payload.form.some(el => el.formId === data[i].FormId);
                    if (!found)
                        payload.form.push({

                            'formId': data[i].FormId
                            , 'name': data[i].FormTitle
                            , 'description': data[i].FormDescription

                        })

                    const index = payload.form.length - 1
                    if (!payload.form[index].question) {
                        payload.form[index].question = []
                    }


                    var find = payload.form[index].question.some(el => el.qid === data[i].QuestionId)
                    console.log(find)
                    if (!find){
                        payload.form[index].question.push({
                            'qid': data[i].QuestionId
                            , 'questionNumber': data[i].questionNumber
                            , 'questionDetail': data[i].questionDetail
                            , 'questionText': data[i].questionText
                            , 'QuestionType': data[i].QuestionType
                        })
                    }
                   
                    const qindex = payload.form[index].question.length - 1
                    if (data[i].AnswerText != null ) {

                        if (!payload.form[index].question[qindex].options) {
                            payload.form[index].question[qindex].options = []
                        }
                        payload.form[index].question[qindex].options.push(data[i].AnswerText)
                        
                    }

                }
            }
        }
       
    })
    await sleep(1000);

    res.send(payload)

})


module.exports = router
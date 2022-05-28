const express = require('express');
const cors = require("cors");
const app = express()
const sql = require('./../DBconfig');
const { localStorage } = require("node-localstorage")
const router = express.Router({ mergeParams: true })

app.use(express.json());
app.use(cors())
app.use(express.urlencoded())

router.post('/', (req, res) => {
    var request = new sql.sql.Request()
    const userId = req.body.userId;
    const formTitle = req.body.formDetails.title
    const formDesc = req.body.formDetails.details
    var dateCreated = new Date().toISOString() + ""
    const query =
        `              
                    INSERT INTO [Hyperian].[dbo].[FormDetails]
                    (UserId,dateCreated,FormTitle,FormDescription) 
                    OUTPUT Inserted.FormId VALUES

                    (
                        '${userId}'
                        ,'${dateCreated}'
                        ,'${formTitle}'
                        ,'${formDesc}'

                    )                    
                    
                    `
    request.query(query, function (err, recordset) {

        if (err) {
            console.log(err)

            res.send({ message: err, success: 0 })
        }
        else {
            formid = recordset['recordset'][0]['FormId']

            res.send({ message: "Form registered", form_id: recordset['recordset'][0]['FormId'], success: 1 })

        }
    });



})


router.post('/question', (req, res) => {

    const formQuestions = req.body.pages
    var request = new sql.sql.Request()
    var questionType
    var questionNumber
    var questionTitle
    var questionDescription
    var questionId
    var optionsList = []
    var options
    var formId = req.body.formId
    var questionValues=[]
    for (let i = 0; i < formQuestions.length; i++) {
        console.log(formQuestions[i])
        questionType = formQuestions[i]['elements'][0].name
        questionNumber = formQuestions[i]['elements'][0].questionNumber
        questionTitle = formQuestions[i]['elements'][0].questiontitle
        questionDescription = formQuestions[i]['elements'][0].questionDescription
        options = formQuestions[i]['elements'][0].options
        // optionsList = formQuestions[i]['elements'][0].optionsList
        console.log(formId)
        const query2 =
            `
        Insert into [Hyperian].[dbo].[questionDetails] 
        (questionType
        ,questionNumber
        ,questionText
        ,questionDetail,formId) 
        OUTPUT Inserted.QuestionId 
         Values(
        (select QuestionId from [Hyperian].[dbo].[QuestionType] 
        where [QuestionType]=
        '${questionType}'),
        '${questionNumber}',
        '${questionTitle}',
        '${questionDescription}',
        '${formId}')            
        `
        request.query(query2)
            .then(function (recordset) {
                if (options == true) {
                    optionsList = formQuestions[i]['elements'][0].optionsList
                    console.log('inside if')
                    console.log(optionsList.length, optionsList)
                    questionId = recordset['recordset'][0]['QuestionId']

                    for (let j = 0; j < optionsList.length; j++) {
                        var choice = optionsList[i].choice
                        const query3 = `

                        Insert into [Hyperian].[dbo].[options] 
                        (QuestId,AnswerText)
                         values('${questionId}'
                         ,'${choice}')
                         
                         `
                        request.query(query3, function (err, recordset) {
                            if (err) {
                                console.log(err)
                            }
                            else {
                                console.log('done')
                            }

                        })
                    }
                }
            })
            .catch(function (errorMessage) {
                return errorMessage;
            })
            ;
    }

}
)


module.exports = router
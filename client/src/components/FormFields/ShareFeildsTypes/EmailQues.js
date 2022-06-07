import React from "react"


const EmailQues =({questionNumber, ques,description,onQuestionAnswerChange}) =>{
    const submitAnswer = (e) =>{
        onQuestionAnswerChange(e.target.value);
    }
    return(<>
     <div>
            <div className=''>
                <span className='ques_no' style={{padding:"-100px",background:"transparent"}}>{questionNumber}.</span>
                <input type="text" disabled className='input-ques' placeholder="Enter Question Text" value={ques} />

                    <textarea type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
       
                <input type="textarea"   className='ans-disabled' placeholder="Name@example.com" onChange={submitAnswer}/>
               
            </div>
        </div>
    </>)
}
export default EmailQues;
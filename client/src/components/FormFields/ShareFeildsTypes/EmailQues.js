import React from "react"


const EmailQues =({questionNumber, ques,description}) =>{
    return(<>
     <div>
            <div className=''>
                <span className='ques_no'>{questionNumber}.</span>
                <input type="text" disabled className='input-ques' placeholder="Enter Question Text" value={ques} />
                <textarea type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                <input type="email"  className='ans-disabled' placeholder="Name@example.com" />
               
            </div>
        </div>
    </>)
}
export default EmailQues;
import React, { useState } from 'react'




const SingleLineText = ({questionNumber,ques,description,onQuestionAnswerChange}) => {
    
    const submitAnswer = (e) =>{
        onQuestionAnswerChange(e.target.value);
    }
    
    return (
        <div>
            <div className=''>
                <span className='ques_no' style={{padding:"20px",margin:"20px"}}>{questionNumber} </span>
                <input type="text" disabled className='input-ques' placeholder="Enter Question Text" value={ques}  />
             
                    <textarea  type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
              
                <input type="textarea"  className='ans-disabled' placeholder="Type your answer here" onChange={submitAnswer} />
                
            </div>
        </div>
    )
}
export default SingleLineText;
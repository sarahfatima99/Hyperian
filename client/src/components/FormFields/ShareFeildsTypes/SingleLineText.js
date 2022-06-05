import React, { useState } from 'react'




const SingleLineText = ({questionNumber,ques,description}) => {
    
    
    return (
        <div>
            <div className=''>
                <span className='ques_no'>{questionNumber}</span>
                <input type="text" disabled  className='input-ques' placeholder="Enter Question Text" value={ques}  />
                <textarea type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                <input type="textarea"  className='ans-disabled' placeholder="Type your answer" />
                
            </div>
        </div>  
    )
}
export default SingleLineText;
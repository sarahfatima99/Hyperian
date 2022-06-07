import React from 'react'


export default function Website({questionNumber,ques,description}) {
    return (
        <div>
            <div className=''>
                <span className='ques_no' >{questionNumber}.</span>
                <input type="text" className='input-ques' value={ques} />
            
                    <textarea  type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
            
                <input type="textarea"  className='ans-disabled' placeholder="www.example.com" />
            </div>
        </div>
    )
}

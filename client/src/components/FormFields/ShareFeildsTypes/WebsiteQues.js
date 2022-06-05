import React from 'react'


export default function Website({questionNumber,ques,description}) {
    return (
        <div>
            <div className=''>
                <span className='ques_no' style={{padding:"20px",margin:"20px"}}>{questionNumber}.</span>
                <input type="text" className='input-ques' value={ques} />
                <div className='d-flex flex-row align-item-center'>
                    <textarea style={{paddingTop:"0px" ,marginLeft:"95px",marginTop:"0px"}} type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                </div>
                <input type="textarea"  className='ans-disabled' placeholder="www.example.com" />
            </div>
        </div>
    )
}

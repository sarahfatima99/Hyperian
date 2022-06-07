import React from 'react'





const  MultiLineText = ({questionNumber, ques,description,onQuestionAnswerChange}) => {
    const submitAnswer = (e) =>{
        onQuestionAnswerChange(e.target.value);
    }
    return (
        <div>
            <div className=''>
                <span className='ques_no' style={{padding:"20px",margin:"20px"}}>{questionNumber}.</span>
                <input type="text" disabled className='input-ques' placeholder="Enter Question Text" value={ques} />
                <div className='d-flex flex-row align-item-center'>
                    <textarea style={{paddingTop:"0px" ,marginLeft:"95px",marginTop:"0px"}} type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                </div>
                <input type="textarea"  className='ans-disabled' placeholder="Type your answer" onChange={submitAnswer}/>
                
            </div>
        </div>  
    )
}
export default MultiLineText;
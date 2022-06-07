import React from 'react'





const  MultiLineText = ({questionNumber, ques,description}) => {
    console.log(ques);
    return (
        <div>
            <div className=''>
                <span className='ques_no' style={{padding:"-100px",background:"transparent"}}>{questionNumber}.</span>
                <input type="text" disabled className='input-ques' placeholder="Enter Question Text" value={ques} />
           
                    <textarea type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
            
                <input type="textarea"  className='ans-disabled' placeholder="Type your answer" />
                
            </div>
        </div>  
    )
}
export default MultiLineText;
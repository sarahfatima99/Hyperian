import React,{useState} from 'react'



const MultiChoiceQues = ({questionNumber,ques,description,optionsList}) => {
  
  return (
    <div>            
        <div className=''>
        <span className='ques_no' >{questionNumber}</span>
        <input type="text" className='input-ques' value={ques} />
        <div className='d-flex flex-row align-item-center'>
                    <textarea style={{paddingTop:"0px" ,marginLeft:"95px",marginTop:"0px"}} type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                </div>
      <br/>
       {        
        
          optionsList.map((item, key) => {
              
            return (
                <div>                                
                  <input type="textarea"  className=" multi-choice add-option"  value={item} />                               
                </div>
                )
                })
        }
        
        <br/>
        
        </div>
    </div>
  )
}
export default MultiChoiceQues;
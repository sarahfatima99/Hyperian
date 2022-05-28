import React,{useState} from 'react'



export default function MultichoiceAllVisible({questionNumber,ques,description,optionsList}) {

  return (
    <div>            
        <div className=''>
        <span className='ques_no'>{questionNumber}</span>
        <input type="text" className='input-ques' value={ques} />
        <textarea type="textarea" className='input-ques description' value={description} />
      <br/>
       {        
        
          optionsList.map((item, key) => {
              console.log(item)
            return (
                <div>                                
                  <input type="textarea"  className=" multi-choice add-option"  value={item.choice} />                               
                </div>
                )
                })
        }
        
        <br/>
        
        </div>
    </div>
  )
}
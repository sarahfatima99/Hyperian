import { useState } from "react";



export default function FileUpload({questionNumber , ques,description}) {



  return (
    <div>
      <div className="">
        <span className='ques_no'>{questionNumber}.</span>
        <input type="text" className='input-ques' value={ques}/>
        <textarea type="textarea" className='input-ques description' value={description} />
        <div className="form-group files" >
         
                <input type="file"                  
                       className="form-control"
                       multiple/>
            </div>
          
      </div>
    </div>
  )
}

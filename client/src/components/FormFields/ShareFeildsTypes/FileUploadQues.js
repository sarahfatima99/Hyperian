import { useState } from "react";



export default function FileUpload({questionNumber , ques,description}) {

  


  return (
    <div>
      <div className="">
        <span className='ques_no' >{questionNumber}.</span>
        <input type="text" className='input-ques' value={ques}/>
        <div className='d-flex flex-row align-item-center'>
                    <textarea style={{paddingTop:"0px" ,marginLeft:"95px",marginTop:"0px"}} type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                </div>
        <div className="form-group files" >
         
                <input type="file"                  
                       className="form-control"
                       multiple/>
            </div>
          
      </div>
    </div>
  )
}

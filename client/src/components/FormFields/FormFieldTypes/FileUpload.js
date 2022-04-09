import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import './FromFields.css'

export default function FileUpload(props) {

  return (
    <div>
      <div className="form-type container">
        <span className='ques_no'>{props.questionNumber}.</span>
        <input type="text" className='input-ques' placeholder="Enter Question Text" />
        <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" />
        <div className="form-group files">
         
                <input type="file"                    
                       className="form-control"
                       multiple/>
            </div>
          
      </div>
    </div>
  )
}

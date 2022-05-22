import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import './FromFields.css'

export default function FileUpload({questionNumber , onQuestionTitleChange,onQuestionDescriptionChange}) {

  const Questionvalue = (e) =>{
        
    onQuestionTitleChange(e.target.value);

}

const Descriptionvalue = (e) => {
    
    onQuestionDescriptionChange(e.target.value);
}

  return (
    <div>
      <div className="form-type container">
        <span className='ques_no'>{questionNumber}.</span>
        <input type="text" className='input-ques' placeholder="Enter Question Text" onChange={Questionvalue}/>
        <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" onChange={Descriptionvalue} />
        <div className="form-group files">
         
                <input type="file"                    
                       className="form-control"
                       multiple/>
            </div>
          
      </div>
    </div>
  )
}

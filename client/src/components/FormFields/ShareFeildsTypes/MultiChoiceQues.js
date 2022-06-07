import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { withStyles } from "@material-ui/core/styles";


const MultiChoiceQues = ({ questionNumber, ques, description,onQuestionAnswerChange, optionsList }) => {

const onChangeValue = (e) =>{
  onQuestionAnswerChange(e.target.value);
}
  return (
    <div>
      <div className=''>
        <span className='ques_no'>{questionNumber}.</span>

            <input
          type="text"
          className="input-ques"
          value={ques}
        />
       <div className='d-flex flex-row align-item-center'>
                    <textarea style={{paddingTop:"0px" ,marginLeft:"95px",marginTop:"0px"}} type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                </div>
          {/* <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          > */}

            {
              optionsList.map((item, key) => {
                return (
                  <div>
                       <div onChange={onChangeValue}>
                       <input style={{fontSize:"30px"}} type="radio" value={item} name="gender" />            {item}
      </div>
                  </div>
                )

              })
            }
         
        

      </div>
    </div>
    
  )
}
export default MultiChoiceQues;
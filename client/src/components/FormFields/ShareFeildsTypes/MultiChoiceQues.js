import React, { useState } from 'react'
import './Sharefields.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';



const MultiChoiceQues = ({ questionNumber, ques, description, optionsList }) => {

  return (
    <div>
      <div className=''>
        <span className='ques_no'style={{padding:"0",background:"transparent"}}>{questionNumber}.</span>
        <input type="text" className='input-ques' placeholder="Enter Question Text" onChange={ques} />
        <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" onChange={description} />

      


        {
          optionsList.map((item,key)=>{
            return(
              <label className="chck">
              <input type="checkbox" />
              <span className="checkmark"></span>
              {item}
            </label>
            )
          })
        }

        {/* <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">{ques}</FormLabel>
          <h1>{description}</h1>
       
            {
              optionsList.map((item, key) => {
                return (
                  <div>

                    <FormControlLabel control={<Checkbox />} value={item} label={item}  />
                  </div>
                )

              })
            }
       
        </FormControl> */}

      </div>
    </div>
  )
}
export default MultiChoiceQues;
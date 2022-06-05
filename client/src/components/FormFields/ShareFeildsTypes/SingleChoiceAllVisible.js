import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



export default function SingleChpiceAllVisible({ questionNumber, ques, description, optionsList }) {

  return (
    <div>
      <div className=''>
        <span className='ques_no'>{questionNumber}.</span>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">{ques}</FormLabel>
          <h1>{description}</h1>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >

            {
              optionsList.map((item, key) => {
                return (
                  <div>
                    <FormControlLabel control={<Radio />} value={item} label={item}  />
                  </div>
                )

              })
            }
          </RadioGroup>
        </FormControl>

      </div>
    </div>
  )
}
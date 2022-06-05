import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function DropDown({ questionNumber, ques, description, optionsList }) {

  console.log(optionsList)
  return (
    <div>
      <div className=''>
        <span className='ques_no'>{questionNumber}.</span>
        <input type="text" className='input-ques' value={ques} />
        <textarea type="textarea" className='input-ques description' value={description} />
        <br />
        <br />  

        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{ques}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"       
          label="Age"          
        >
        {
            optionsList.map((item)=>{
              return(
                <div>
                   <MenuItem value={item}>{item}</MenuItem>

                </div>
              )
            })

        }
  
        </Select>
      </FormControl>


      </div>
    </div>
  )
}
import React from 'react'
import '../FormFieldTypes/FromFields.css';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';


export default function SingleLineQues({questionNumber , ques,description}) {
    
    return (
        <div>
            <div className=''>
                <span className='ques_no'>{questionNumber}.</span>
                <input type="text" className='input-ques' value={ques} />
                <textarea type="textarea" className='input-ques description' value={description} />
               <br/>
                <Slider  defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </div>
        </div>  
    )
}

import React from 'react'
import '../FormFieldTypes/FromFields.css';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';


export default function SingleLineQues({ questionNumber, ques, description }) {

    return (
        <div>
            <div className=''>
                <span className='ques_no'>{questionNumber}.</span>
                <input disabled type="text" className='input-ques' value={ques} />

                <textarea type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                <br />
                <Slider style={{width:""}} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </div>
        </div>
    )
}

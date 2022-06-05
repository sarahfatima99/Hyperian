import React from 'react'
import '../FormFieldTypes/FromFields.css';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';


export default function SingleLineQues({questionNumber , ques,description}) {
    
    return (
        <div>
            <div className=''>
                <span className='ques_no' style={{padding:"20px",margin:"20px"}}>{questionNumber}.</span>
                <input type="text" className='input-ques' value={ques} />
                <div className='d-flex flex-row align-item-center'>
                    <textarea style={{paddingTop:"0px" ,marginLeft:"95px",marginTop:"0px"}} type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                </div>
               <br/>
                <Slider  defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </div>
        </div>  
    )
}

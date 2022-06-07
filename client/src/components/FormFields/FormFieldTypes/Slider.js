import React from 'react'
// import './FromFields.css'
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';


export default function SingleLineQues({questionNumber , onQuestionTitleChange,onQuestionDescriptionChange}) {
    const Questionvalue = (e) =>{
        
        onQuestionTitleChange(e.target.value);

    }

    const Descriptionvalue = (e) => {
        
        onQuestionDescriptionChange(e.target.value);
    }
    return (
        <div>
            <div className='form-type container'>
                <span className='ques_no' style={{background:"transparent",padding:"0"}}>{questionNumber}.</span>
                <input type="text" className='input-ques' placeholder="Enter Question Text" onChange={Questionvalue} />
                <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)"onChange={Descriptionvalue} />
               <br/>
                <Slider style={{width:""}} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                <Button style={{marginTop:"30px", marginLeft:"40px", padding:"8px", fontSize:"18px", color:"#68c5c5", borderColor:"#68c5c5"}} variant="outlined">Ok</Button>
            </div>
        </div>  
    )
}

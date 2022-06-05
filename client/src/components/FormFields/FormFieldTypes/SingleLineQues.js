import React, { useState } from 'react'
import './FromFields.css'
import Button from '@mui/material/Button';



export default function SingleLineQues({textcolor,questionNumber , onQuestionTitleChange,onQuestionDescriptionChange}) {
    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');
    
    const Questionvalue = (e) =>{
        
        onQuestionTitleChange(e.target.value);

    }

    const Descriptionvalue = (e) => {
        
        onQuestionDescriptionChange(e.target.value);
    }


    
    return (
        <div>
            <div className='form-type container'>
                <span className='ques_no'>{questionNumber}.</span>
                <input type="text" style={{placeholderTextColor:textcolor}} className='input-ques' placeholder="Enter Question Text" onChange={Questionvalue} />
                <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" onChange={Descriptionvalue}/>
                <input type="textarea" disabled className='ans-disabled' placeholder="Type your answer" />
                <Button style={{marginTop:"30px", marginLeft:"40px", padding:"8px", fontSize:"18px", color:"#68c5c5", borderColor:"#68c5c5"}} variant="outlined">Ok</Button>
            </div>
        </div>  
    )
}

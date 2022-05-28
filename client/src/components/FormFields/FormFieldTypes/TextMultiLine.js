import React,{useEffect,useRef} from 'react'
import './FromFields.css'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import useState from 'react-usestateref'
import addQuestion from './../../../actions/index'
import axios, { Axios } from "axios";



export default function TextMultiLine({questionNumber , onQuestionTitleChange,onQuestionDescriptionChange}) {
    const [formTitle,setFormTitle]=useState()
    const Questionvalue = (e) =>{
        setFormTitle(e.target.value)
        onQuestionTitleChange(e.target.value);

    }
    
    const Descriptionvalue = (e) => {
        
        onQuestionDescriptionChange(e.target.value);
    }
    return (
        <div>
            <div className='form-type container'>
                <span className='ques_no'>{questionNumber}.</span>
                <input type="text" className='input-ques' placeholder="Enter Question Text" onChange={Questionvalue}/>
                <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" onChange={Descriptionvalue} />
                <input type="textarea" disabled className='ans-disabled' placeholder="Type your answer" />
                <Button style={{marginTop:"30px", marginLeft:"40px", padding:"8px", fontSize:"18px", color:"#68c5c5", borderColor:"#68c5c5"}} variant="outlined">Ok</Button>
            </div>
        </div>  
    )
}

import React,{useEffect,useRef} from 'react'
import './FromFields.css'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import useState from 'react-usestateref'
import addQuestion from './../../../actions/index'
import axios, { Axios } from "axios";



export default function TextMultiLine(props) {

   const dispatch=useDispatch()


    const [questionText,setQuestionText,Quesref]=useState('Enter question text')
    const [questionDesc,setQuesDesc,descRef]=useState('Enter Question Description (optional)')

    const payload={
        questNumber:props.questionNumber,
        quesText:Quesref.current,
        quesDesc:descRef.current,
        quesType:'TextMultiLine'

    }
    useEffect(() => {    

        return () => {
            console.log(payload)
            dispatch(addQuestion(payload))
  
        }
      },[])

  



      const handleQtextChange=(e)=>{
            setQuestionText(e.target.value)
            console.log(questionText)
      }

    return (
        <div>
            <div className='form-type container'>
                <span className='ques_no'>{props.questionNumber}.</span>
                <input type="text" className='input-ques' placeholder={questionText} onChange={handleQtextChange} />
                <textarea type="textarea" className='input-ques description' placeholder={questionDesc} onChange={(e)=>{setQuesDesc(e.target.value)}} />
                <input type="textarea" disabled className='ans-disabled' placeholder="Type your answer" />
                <Button style={{marginTop:"30px", marginLeft:"40px", padding:"8px", fontSize:"18px", color:"#68c5c5", borderColor:"#68c5c5"}} variant="outlined">Ok</Button>
            </div>
        </div>  
    )
}

import React,{useState} from 'react'
import Button from '@mui/material/Button';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

export default function Phone({questionNumber , ques,description,onQuestionAnswerChange}) {
  const [v , setV] = useState(null);
  var val = "";
  const submitAnswer = (e) =>{
    val =  e;
   setV(val)
   onQuestionAnswerChange(v)
}
 
// const setPhone = (v) =>{
//   onQuestionAnswerChange(v);
//   console.log(v);
// }
  return (
    <div>
         <div className=''>
                <span className='ques_no'>{questionNumber}.</span>
                <input type="text" className='input-ques' placeholder="Enter Question Text" value={ques} />
                <div className='d-flex flex-row align-item-center'>
                    <textarea style={{paddingTop:"0px" ,marginLeft:"95px",marginTop:"0px"}} type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                </div>
                <PhoneInput  width="100" className="phone"  defaultCountry="PAK" placeholder="Enter phone number" onChange={submitAnswer}  />
                
                
          </div>
    </div>
  )
}

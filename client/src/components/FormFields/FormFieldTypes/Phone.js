import React,{useState} from 'react'
import Button from '@mui/material/Button';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import "./Phone.css";

export default function Phone({questionNumber , onQuestionTitleChange,onQuestionDescriptionChange}) {
  const [value, setValue] = useState();

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
                <input type="text" className='input-ques' placeholder="Enter Question Text" onChange={Questionvalue} />
                <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" onChange={Descriptionvalue}/>
                <PhoneInput width="100" className="phone"  defaultCountry="PAK" placeholder="Enter phone number" value={value} onChange={setValue}/>
                
                <Button style={{marginTop:"30px", marginLeft:"40px", padding:"8px", fontSize:"18px", color:"#68c5c5", borderColor:"#68c5c5"}} variant="outlined">Ok</Button>
          </div>
    </div>
  )
}

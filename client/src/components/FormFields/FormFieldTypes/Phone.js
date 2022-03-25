import React,{useState} from 'react'
import Button from '@mui/material/Button';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import "./Phone.css";

export default function Phone() {
  const [value, setValue] = useState();
  return (
    <div>
         <div className='form-type container'>
                <span className='ques_no'>1.</span>
                <input type="text" className='input-ques' placeholder="Enter Question Text" />
                <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" />
                <PhoneInput width="100"  defaultCountry="PAK" placeholder="Enter phone number" value={value}
      onChange={setValue}/>
                
                <Button style={{marginTop:"30px", marginLeft:"40px", padding:"8px", fontSize:"18px", color:"#68c5c5", borderColor:"#68c5c5"}} variant="outlined">Ok</Button>
          </div>
    </div>
  )
}

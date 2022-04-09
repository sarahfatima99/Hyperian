import React,{useState} from 'react'
import './FromFields.css'
import Button from '@mui/material/Button';


export default function DropDown(props) {

    const [optionList,setOptionsList]=useState([])
    const [count, setCount] = useState(1);

    const handleKeyDown=(e)=>
    {    
        if (e.key == 'Enter')
         {
            setCount(prevCount => prevCount + 1)  
            setOptionsList([...optionList,
                        {

                           name: e.target.value
                        }])            
                        e.target.value = ""
                        console.log(optionList) 
                        
          }
     }

  return (
    <div>            
        <div className='form-type container'>
        <span className='ques_no'>{props.questionNumber}.</span>
        <input type="text" className='input-ques' placeholder="Enter Question Text" />
        <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" />
        <br/>
       {        
        
          optionList.map((item, key) => {
            return (
                <div>                                
                  <input type="textarea"  className="multi-choice add-option"    placeholder={item.name} onKeyDown={handleKeyDown} />                               
                </div>
                )
                })
        }
        <input type="textarea" className="multi-choice" placeholder={'Enter option '+ count} onKeyDown={handleKeyDown} />
        <br/>
        <Button style={{marginTop:"30px", marginLeft:"330px", padding:"8px", fontSize:"18px", color:"#68c5c5", borderColor:"#68c5c5"}} variant="outlined">Ok</Button>
        </div>
    </div>
  )
}
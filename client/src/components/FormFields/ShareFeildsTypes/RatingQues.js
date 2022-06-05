import React, { useState ,useEffect} from "react";
import "../FormFieldTypes/FromFields.css";
import Rating from "@mui/material/Rating";


export default function Ratings({questionNumber , ques,description}) {

  useEffect(() => {
    window.addEventListener('mousemove', () => {});
  
    
    return () => {
      window.removeEventListener('mousemove', () => {})
    }
  }, [])

    const [value,setValue] = useState(0);

  return (
    <div>
      <div className="">
        <span className="ques_no" style={{padding:"20px",margin:"20px"}}>{questionNumber}.</span>
        <input
          type="text"
          className="input-ques"
          value={ques}
        />
       <div className='d-flex flex-row align-item-center'>
                    <textarea style={{paddingTop:"0px" ,marginLeft:"95px",marginTop:"0px"}} type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                </div>
<br/>
        <Rating
          name="customized-color"
          value={value}
          size="large"
         
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
    </div>
  );
}

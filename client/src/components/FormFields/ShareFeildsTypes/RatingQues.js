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
        <span className="ques_no">{questionNumber}.</span>
        <input
          type="text"
          className="input-ques"
          value={ques}
        />
        <textarea
          type="textarea"
          className="input-ques description"
          value={description}
        />
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

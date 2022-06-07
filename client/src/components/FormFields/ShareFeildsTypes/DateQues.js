import * as React from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
export default function Date({questionNumber , ques,description}) {
    const [value, setValue] = React.useState(null);

      
  
    
    return (
        <div>
            <div className=''>
                <span className='ques_no'>  {questionNumber}.</span>
                <input type="text" className='input-ques' placeholder="Enter Question Text" value={ques} />
                <div className='d-flex flex-row align-item-center'>
                    <textarea style={{paddingTop:"0px" ,marginLeft:"95px",marginTop:"0px"}} type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                </div>
               <br/>
                <LocalizationProvider   dateAdapter={AdapterDateFns}>
                    <DatePicker 
                        
                        label="Select date"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
        </div>
    )
}

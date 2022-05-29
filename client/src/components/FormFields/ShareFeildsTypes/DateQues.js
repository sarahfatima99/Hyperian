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
                <span className='ques_no'>{questionNumber}.</span>
                <input type="text" className='input-ques' placeholder="Enter Question Text" value={ques} />
                <textarea type="textarea" className='input-ques description' value={description} />
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

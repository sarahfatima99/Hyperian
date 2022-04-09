import * as React from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import './FromFields.css'
export default function Date(props) {
    const [value, setValue] = React.useState(null);
    
    return (
        <div>
            <div className='form-type container'>
                <span className='ques_no'>{props.questionNumber}.</span>
                <input type="text" className='input-ques' placeholder="Enter Question Text" />
                <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" />
               <br/>
                <LocalizationProvider style={{marginTop:"100px"}} dateAdapter={AdapterDateFns}>
                    <DatePicker
                        
                        label="Select date"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <Button
                    style={{
                        marginTop: "100px",
                     
                        padding: "8px",
                        fontSize: "18px",
                        color: "#68c5c5",
                        borderColor: "#68c5c5"
                    }}
                    variant="outlined">Ok</Button>
            </div>
        </div>
    )
}

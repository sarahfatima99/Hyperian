import * as React from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import './FromFields.css'
export default function Date({questionNumber , onQuestionTitleChange,onQuestionDescriptionChange}) {
    const [value, setValue] = React.useState(null);

      
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
                <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" onChange={Descriptionvalue} />
               <br/>
                <LocalizationProvider style={{marginTop:"100px"}} dateAdapter={AdapterDateFns}>
                    <DatePicker disabled
                        
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

import React,{useState} from 'react';
import  Form from "./Form";
import "./Form.css";
import SingleLineText from './ShareFeildsTypes/SingleLineText';
import MultiLineText from "./ShareFeildsTypes/MultiLineText"
import EmailQues from './ShareFeildsTypes/EmailQues';

const ShareForm = ({data}) => {
    
    
  const [formQues, SetFormQues] = useState([]);


    const shareHandle = () =>{
      
      console.log(formQues)
      data['Pages'].map((item) =>{
        
       console.log(item)
        if(item.elements[0]['name'] === 'Single Line text')
        {
          SetFormQues([...formQues,"Single Line Text"]);
          
        }
        else if(item.elements[0]['name'] === 'Multi Line Text')
        {
          
          SetFormQues([...formQues,{field_jsx: <MultiLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/> }])
          
        }
        else if(item.elements[0]['name'] === "Email")
        {
          console.log(formQues)
          SetFormQues([...formQues,"Emailll" ])
          console.log(formQues)
          
        }
        
      })
      
    }
    
  return (
    <>
    <button onClick={shareHandle}>Preview</button>
    <div>{formQues.map((item,key)=>{
      console.log(formQues)
      return(<>
      {item}
      </>)
    })}</div>
   
    </>
  )
}
export default ShareForm;

import React,{useState} from 'react';
import "./Form.css";
import SingleLineText from './ShareFeildsTypes/SingleLineText';
import MultiLineText from "./ShareFeildsTypes/MultiLineText"
import EmailQues from './ShareFeildsTypes/EmailQues';


const ShareForm = ({data}) => {
    
  
  return (
    <>
   
<div>
  <ul>
   
    {data['Pages'].map((item) =>{
      
      if(item.elements[0]['name'] === "Single Line text")
      {
        console.log("Nimrah");
        return(
        <SingleLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
        )
      }
      else if(item.elements[0]['name'] === "Multi Line Text")
      {
        console.log("Nimrah");
        return(
        <MultiLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
        )
      }
      else if(item.elements[0]['name'] === "Email")
      {
        console.log("Nimrah");
        return(
        <EmailQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
        )
      }

    })}
       
    </ul>
   </div>
    </>
  )
}
export default ShareForm;

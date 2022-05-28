import React from "react";
import { Dropdown } from "reactstrap";
import "./Form.css";
import SingleLineText from './ShareFeildsTypes/SingleLineText';
import MultiLineText from "./ShareFeildsTypes/MultiLineText"
import EmailQues from './ShareFeildsTypes/EmailQues';
import PhoneQues from "./ShareFeildsTypes/PhoneQues";
import WebsiteQues from "./ShareFeildsTypes/WebsiteQues";
import DateQues from "./ShareFeildsTypes/DateQues";
import PictureChoiceQues from "./ShareFeildsTypes/PictureChoiceQues";
import FileUploadQues from "./ShareFeildsTypes/FileUploadQues";
import MultiChoiceQues from "./ShareFeildsTypes/MultiChoiceQues";
import SliderQues from "./ShareFeildsTypes/SliderQues";
import RatingQues from "./ShareFeildsTypes/RatingQues"
import DropDownQues1 from './ShareFeildsTypes/DropDownQues1';
import { useLocation } from "react-router-dom";

const UserShareForm = () =>{
    const location = useLocation();
    const data1 = location.state.data;
    const formTittle1 = location.state.formTittle;
    const formDescription1 = location.state.formDescription;
    return(<>
    <div className='container'>
     <div className='d-flex flex-column'></div>
     <h1 className='input-ques' style={{padding:"10px"}}>Tittle : {formTittle1}</h1>
     <p style={{padding:"10px"}}>Description :  {formDescription1}</p>
   </div>
   <div style={{alignItems:"center",padding:"30px"}}>
  
   
    {data1['Pages'].map((item) =>{
      
      if(item.elements[0]['name'] === "Single Line text")
      {
        
        return(
          <div style={{ border:"2px solid black",marginTop:"10px",padding:"20px"}}>
        <SingleLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
        </div>)
      }
      else if(item.elements[0]['name'] === "Multi Line Text")
      {
        
        return(
          <div style={{ border:"2px solid black",marginTop:"10px",padding:"20px"}}>
        <MultiLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
        </div>)
      }
      else if(item.elements[0]['name'] === "Email")
      {
        
        return(
          <div style={{ border:"2px solid black",marginTop:"10px",padding:"20px"}}>
        <EmailQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
        </div>)
      }
      else if(item.elements[0]['name'] === "Phone")
      {
        
        return(
          <div style={{ border:"2px solid black",marginTop:"10px",padding:"20px"}}>
        <PhoneQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
        </div>)
      }
      else if(item.elements[0]['name'] === "Website")
      {
        
        return(
          <div style={{ border:"2px solid black",marginTop:"10px",padding:"20px"}}>
        <WebsiteQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
        </div>)
      }
      else if(item.elements[0]['name'] === "Date")
      {
        
        return(
          <div style={{ border:"2px solid black",marginTop:"10px",padding:"20px"}}>
        <DateQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
        </div>)
      }
      else if(item.elements[0]['name'] === "Picture Choice")
      {
        
        return(
          <div style={{ border:"2px solid black",marginTop:"10px",padding:"20px"}}>
        <PictureChoiceQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
        </div>)
      }
      else if(item.elements[0]['name'] === "File Upload")
      {
        
        return(
          <div style={{ border:"2px solid black",marginTop:"10px",padding:"20px"}}>
        <FileUploadQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
        </div> )
      }
      else if(item.elements[0]['name'] === "Multiple Choice")
      {
        
        console.log(item.elements[0]['optionsList'])
        return(
          <div style={{ border:"2px solid black",marginTop:"10px",padding:"20px"}}>
        <MultiChoiceQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} optionsList={item.elements[0]['optionsList']}/>
        </div>)
      }
      else if(item.elements[0]['name'] === "Slider")
      {
        
        
        return(
          <div style={{ border:"2px solid black",marginTop:"10px",padding:"20px"}}>
        <SliderQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
        </div> )
      }
      else if(item.elements[0]['name'] === "Ratings")
      {
        return(
          <div style={{ border:"2px solid black",marginTop:"10px",padding:"20px"}}>
        <RatingQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
        </div> )
      }
      else if(item.elements[0]['name'] === "Drop Down (Single Choice)")
      {
        return(
          <div style={{ border:"2px solid black",marginTop:"10px",padding:"20px"}}>
        <DropDownQues1 questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} optionsList={item.elements[0]['optionsList']} />
        </div>)
      }
      else if(item.elements[0]['name'] === "Drop Down (Multi Choice)")
      {
        return(
          <div style={{ border:"2px solid black",marginTop:"10px",padding:"20px"}}>
        <DropDownQues1 questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} optionsList={item.elements[0]['optionsList']} />
        </div>)
      }

    })}
       
   
   </div>
    </>)
}
export default UserShareForm;
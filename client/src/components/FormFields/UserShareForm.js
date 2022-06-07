import React, { useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import "./ShareForm.css";
import { Button } from "react-bootstrap";
import Response from "../../Pages/Response/Response";



const UserShareForm = () => {
  const [active,setActive] = useState(null);
  const location = useLocation();
  const formDetail = location.state.data;
  console.log(location.state.data["Pages"])
  let navigate  = useNavigate();
  

  const storeResponse = () =>{
    alert("Your Response has been Submited successfully");
    var data = location.state.data
    navigate("/response",{state:{data:data}})
  }
  const onChnageQuestionAnswer = (len,e) =>{
  
    location.state.data["Pages"][len]["elements"][0]["questionAnswer"] = e;
    
    
  }
  
  
  return (
    <>
    <Slide style={{marginTop:"90px"}}>
        {location.state.data["Pages"].map((item) => {
         
          if (item.elements[0]["name"] === "Single Line text") {
                return (
                  <div className="each-slide">
                <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
                <SingleLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} onQuestionAnswerChange={(e)=>{onChnageQuestionAnswer(item.elements[0]['questionNumber']-1,e)}} />
                  <span>Question {item.elements[0]['questionNumber']}</span>
                </div>
              </div>
              
                  )
          }
          else if (item.elements[0]["name"] === "Multi Line Text") {

            return (
              <div className="each-slide">
              <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
        <MultiLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} onQuestionAnswerChange={(e)=>{onChnageQuestionAnswer(item.elements[0]['questionNumber']-1,e)}}  />
        <span>Question {item.elements[0]['questionNumber']}</span>
              </div>
      </div>)
          }
          else if(item.elements[0]["name"] === "Multi Line text")
          {
            return(
              <div className="each-slide">
              <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
        <MultiLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} onQuestionAnswerChange={(e)=>{onChnageQuestionAnswer(item.elements[0]['questionNumber']-1,e)}}  />
        <span>Question {item.elements[0]['questionNumber']}</span>
              </div>
      </div>
            )
          }
          else if (item.elements[0]["name"] === "Email")
           {

            return (
              <div className="each-slide">
              <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
        <EmailQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} onQuestionAnswerChange={(e)=>{onChnageQuestionAnswer(item.elements[0]['questionNumber']-1,e)}}  />
        <span>Question {item.elements[0]['questionNumber']}</span>
              </div>
      </div>)
          }
          else if (item.elements[0]["name"] === "Phone") {

            return (
              <div className="each-slide">
              <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
        <PhoneQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} onQuestionAnswerChange={(e)=>{onChnageQuestionAnswer(item.elements[0]['questionNumber']-1,e)}}  />
        <span>Question {item.elements[0]['questionNumber']}</span>
              </div>
      </div>)
          }
          else if (item.elements[0]["name"] === "Website") {

            return (
              <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <WebsiteQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} onQuestionAnswerChange={(e)=>{onChnageQuestionAnswer(item.elements[0]['questionNumber']-1,e)}}  />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
          }
          else if (item.elements[0]["name"] === "Date") {

            return (
              <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <DateQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} onQuestionAnswerChange={(e)=>{onChnageQuestionAnswer(item.elements[0]['questionNumber']-1,e)}}  />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
          }
          else if (item.elements[0]["name"] === "Picture Choice") {

            return (
              <div className="each-slide">
              <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
        <PictureChoiceQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
        <span>Question {item.elements[0]['questionNumber']}</span>
              </div>
      </div>)
          }
          else if (item.elements[0]["name"] === "File Upload") {

            return (
              <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <FileUploadQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
          }
          else if (item.elements[0]["name"] === "Multiple Choice") {

            
            return (
              <div className="each-slide">
              <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
        <MultiChoiceQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} onQuestionAnswerChange={(e)=>{onChnageQuestionAnswer(item.elements[0]['questionNumber']-1,e)}} optionsList={item.elements[0]['optionsList']} />
        <span>Question {item.elements[0]['questionNumber']}</span>
              </div>
      </div>)
          }
          else if (item.elements[0]["name"] === "Slider") {


            return (
              <div className="each-slide">
              <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
        <SliderQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} onQuestionAnswerChange={(e)=>{onChnageQuestionAnswer(item.elements[0]['questionNumber']-1,e)}}  />
        <span>Question {item.elements[0]['questionNumber']}</span>
              </div>
      </div>)
          }
          else if (item.elements[0]["name"] === "Ratings") {
            return (
              <div className="each-slide">
              <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
        <RatingQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} onQuestionAnswerChange={(e)=>{onChnageQuestionAnswer(item.elements[0]['questionNumber']-1,e)}}  />
        <span>Question {item.elements[0]['questionNumber']}</span>
              </div>
      </div>)
          }
          else if (item.elements[0]["name"] === "Drop Down (Single Choice)") {
            return (
              <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <DropDownQues1 questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} optionsList={item.elements[0]['optionsList']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
          }
          else if (item.elements[0]["name"] === "Drop Down (Multi Choice)") {
            return (
              <div className="each-slide">
              <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
        <DropDownQues1 questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} optionsList={item.elements[0]['optionsList']} />
        <span>Question {item.elements[0]['questionNumber']}</span>
              </div>
      </div>)
          }
          
        })}
      </Slide>
      <div style={{marginTop:"50px",textAlign:"center"}}>
      <Button onClick={storeResponse} style={{ backgroundColor: "#39cc83", color: "black", border: "none", borderRadius: "5px", width: "auto", padding: "8px" ,margin:"8px" }}>Submit Form</Button>
      </div>
    </>)
}
export default UserShareForm;
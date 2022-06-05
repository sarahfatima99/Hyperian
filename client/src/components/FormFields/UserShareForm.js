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

const UserShareForm = () => {
  const location = useLocation();
  const formDetails = location.state.formDetails
  const questions = formDetails.question
  const formTitle = formDetails.name
  const formDescription = location.state.description;
  const responsePayload=[]


  const onAnswerChange=(qid,e)=>
  {
    
  }
  
  return (
    <>
      <div className='container'>
        <div className='d-flex flex-column'></div>
        <h1 className='input-ques' style={{ padding: "10px" }}>Title : {formTitle}</h1>
        <p style={{ padding: "10px" }}>Description :  {formDescription}</p>
      </div>
      <div style={{ alignItems: "center", padding: "30px" }}>
        {questions.map((item,idx) => {

          if (item.QuestionType === "Single Line text") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <SingleLineText questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} />
              </div>)
          }
          else if (item.QuestionType === "Multi Line Text") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <MultiLineText questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} />
              </div>)
          }
          else if (item.QuestionType === "Email")
           {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <EmailQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} />
              </div>)
          }
          else if (item.QuestionType === "Phone") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <PhoneQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} />
              </div>)
          }
          else if (item.QuestionType === "Website") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <WebsiteQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} />
              </div>)
          }
          else if (item.QuestionType === "Date") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <DateQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} />
              </div>)
          }
          else if (item.QuestionType === "Picture Choice") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <PictureChoiceQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} />
              </div>)
          }
          else if (item.QuestionType === "File Upload") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <FileUploadQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} />
              </div>)
          }
          else if (item.QuestionType === "Multiple Choice") {

            console.log(item.options)
            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <MultiChoiceQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} optionsList={item.options} />
              </div>)
          }
          else if (item.QuestionType === "Slider") {


            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <SliderQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} />
              </div>)
          }
          else if (item.QuestionType === "Ratings") {
            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <RatingQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} />
              </div>)
          }
          else if (item.QuestionType === "Drop Down (Single Choice)") {
            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <DropDownQues1 questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} optionsList={item.options} />
              </div>)
          }
          else if (item.QuestionType === "Drop Down (Multi Choice)") {
            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <DropDownQues1 questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} optionsList={item.options} />
              </div>)
          }

        })}


      </div>
    </>)
}
export default UserShareForm;
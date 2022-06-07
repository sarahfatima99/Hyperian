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
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import "./ShareForm.css";




const UserShareForm = () => {

  const location = useLocation();
  const formDetail = location.state.data;
  const theme=location.state.theme
  // const formTitle = location.state.formTittle;
  // const formDescription = location.state.formDescription;
  var len = formDetail["Pages"].length;
  console.log(len)
var count  = 0;
  
  return (
    <>
    <Slide style={{marginTop:"90px"}}>
        {location.state.data["Pages"].map((item) => {
         
          if (item.elements[0]["name"] === "Single Line text") {
              count++;
              console.log(count)
              if(count === len)
              {
                return(<>
                   <div className="each-slide">
            <div className={`${theme}`}  >
            <SingleLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
       
              <button>Submit Form</button>
            </div>
          </div>

                </>)
              }
              else{
                return (
              
                  <div className="each-slide">
                <div  className={`${theme}`} >
                <SingleLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
               
                </div>
              </div>
              
                  )

              }
         
          }
          else if (item.elements[0]["name"] === "Multi Line Text") {

            return (
              <div className="each-slide">
              <div className={`${theme}`}  >
        <MultiLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
     
              </div>
      </div>)
          }
          else if(item.elements[0]["name"] === "Multi Line text")
          {
            return(
              <div className="each-slide">
              <div  className={`${theme}`} >
        <MultiLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
     
              </div>
      </div>
            )
          }
          else if (item.elements[0]["name"] === "Email")
           {

            return (
              <div className="each-slide">
              <div className={`${theme}`}  >
        <EmailQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
     
              </div>
      </div>)
          }
          else if (item.elements[0]["name"] === "Phone") {

            return (
              <div className="each-slide">
              <div  className={`${theme}`} >
        <PhoneQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
     
              </div>
      </div>)
          }
          else if (item.elements[0]["name"] === "Website") {

            return (
              <div className="each-slide">
            <div  className={`${theme}`} >
      <WebsiteQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
   
            </div>
    </div>)
          }
          else if (item.elements[0]["name"] === "Date") {

            return (
              <div className="each-slide">
            <div className={`${theme}`}  >
      <DateQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
   
            </div>
    </div>)
          }
          else if (item.elements[0]["name"] === "Picture Choice") {

            return (
              <div className="each-slide">
              <div  className={`${theme}`} >
        <PictureChoiceQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
     
              </div>
      </div>)
          }
          else if (item.elements[0]["name"] === "File Upload") {

            return (
              <div className="each-slide">
            <div  className={`${theme}`} >
      <FileUploadQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
   
            </div>
    </div>)
          }
          else if (item.elements[0]["name"] === "Multiple Choice") {

            
            return (
              <div className="each-slide">
              <div  className={`${theme}`} >
        <MultiChoiceQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} optionsList={item.elements[0]['optionsList']} />
     
              </div>
      </div>)
          }
          else if (item.elements[0]["name"] === "Slider") {


            return (
              <div className="each-slide">
              <div  className={`${theme}`} >
        <SliderQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
     
              </div>
      </div>)
          }
          else if (item.elements[0]["name"] === "Ratings") {
            return (
              <div className="each-slide">
              <div className={`${theme}`}  >
        <RatingQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
     
              </div>
      </div>)
          }
          else if (item.elements[0]["name"] === "Drop Down (Single Choice)") {
            return (
              <div className="each-slide">
            <div  className={`${theme}`} >
      <DropDownQues1 questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} optionsList={item.elements[0]['optionsList']} />
   
            </div>
    </div>)
          }
          else if (item.elements[0]["name"] === "Drop Down (Multi Choice)") {
            return (
              <div className="each-slide">
              <div  className={`${theme}`} >
        <DropDownQues1 questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} optionsList={item.elements[0]['optionsList']} />
     
              </div>
      </div>)
          }

        })}


      </Slide>
    </>)
}
export default UserShareForm;
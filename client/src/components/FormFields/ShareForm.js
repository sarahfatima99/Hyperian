import React, { useState } from 'react';
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
import MultiChoice2 from "./ShareFeildsTypes/MultiChoice2";
import SliderQues from "./ShareFeildsTypes/SliderQues";
import RatingQues from "./ShareFeildsTypes/RatingQues"
import DropDownQues1 from './ShareFeildsTypes/DropDownQues1';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import "./ShareForm.css";


const ShareForm = ({ data, formTittle, formDescription }) => {
  console.log(data.Pages);

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const copy = () => {


    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    setCopied(true)
    navigate("/usershareform", { state: { data: data, formTittle: formTittle, formDescription: formDescription } })
  }
 

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div
            className="col-lg-12"
            style={{
              border: "2px solid rgb(220, 220, 220)",
              boxShadow: "rgba(240, 230, 230, 0.76)",
            }}
          >
            <div className="mt-3" style={{ paddingBottom: "10px" }}>
              <div className="d-flex flex-row justify-content-between">
                <h1 style={{ fontSize: "20px" }}>Preview</h1>
                <Button onClick={handleShow}>Share</Button>

              </div>
            </div>
          </div>

        </div>

      </div>
      <div className='container' style={{border:"5px solid #39cc83"}}>
        <div className='d-flex flex-column' >
        <h1 className='input-ques' style={{ padding: "10px",fontFamily:"sans-serif",color:"",fontSize:"40px" }}>Tittle : {formTittle}</h1>
        <p style={{ padding: "10px",fontFamily:"sans-serif",color:"",fontSize:"20px" }}>Description : {formDescription}</p>
      </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shareable Link</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column'>
          <input value="http://localhost:3000/usershareform" id='myInput' />
          <button style={{ float: "end" }} onClick={() => { openInNewTab("http://localhost:3000/usershareform"); copy(); }}>{!copied ? "Copy link" : "Copied!"}</button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <Slide easing="ease">
        {data['Pages'].map((item) => {

if (item.elements[0]['name'] === "Single Line text") {

  return (
    <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
            <SingleLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
              <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>
    )
}
else if (item.elements[0]['name'] === "Multi Line Text") {

  return (
    <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <MultiLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>
    )
}
else if (item.elements[0]['name'] === "Multi Line text") {

  return (
    <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <MultiLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
}
else if (item.elements[0]['name'] === "Email") {

  return (
    <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <EmailQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
}
else if (item.elements[0]['name'] === "Phone") {

  return (
    <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <PhoneQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
}
else if (item.elements[0]['name'] === "Website") {

  return (
    <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <WebsiteQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
}
else if (item.elements[0]['name'] === "Date") {

  return (
    <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <DateQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
}
else if (item.elements[0]['name'] === "Picture Choice") {

  return (
    <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <PictureChoiceQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
}
else if (item.elements[0]['name'] === "File Upload") {

  return (
    <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <FileUploadQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
}

else if (item.elements[0]['name'] === "Multiple Choice") {


  return (
    <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <MultiChoiceQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} optionsList={item.elements[0]['optionsList']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
}
else if (item.elements[0]['name'] === "Slider") {


  return (
    <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <SliderQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
}
else if (item.elements[0]['name'] === "Ratings") {
  return (
    <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <RatingQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
}
else if (item.elements[0]['name'] === "Drop Down (Single Choice)") {
  return (
    <div className="each-slide">
            <div style={{'backgroundImage': `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`}}>
      <DropDownQues1 questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} optionsList={item.elements[0]['optionsList']} />
      <span>Question {item.elements[0]['questionNumber']}</span>
            </div>
    </div>)
}
else if (item.elements[0]['name'] === "Drop Down (Multi Choice)") {
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
      </div>
    </>
  )
}
export default ShareForm;

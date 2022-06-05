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
import SliderQues from "./ShareFeildsTypes/SliderQues";
import RatingQues from "./ShareFeildsTypes/RatingQues"
import DropDownQues1 from './ShareFeildsTypes/DropDownQues1';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ShareForm = ({ data, formTittle, formDescription }) => {

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
    console.log(copyText);


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
      <div className='container'>
        <div className='d-flex flex-column'></div>
        <h1 className='input-ques' style={{ padding: "10px" }}>Tittle : {formTittle}</h1>
        <p style={{ padding: "10px" }}>Description: {formDescription}</p>
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
      <div style={{ alignItems: "center", padding: "30px" }}>


        {data['Pages'].map((item) => {

          if (item.elements[0]['name'] === "Single Line text") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <SingleLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
              </div>)
          }
          else if (item.elements[0]['name'] === "Multi Line Text") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <MultiLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
              </div>)
          }
          else if (item.elements[0]['name'] === "Email") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <EmailQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
              </div>)
          }
          else if (item.elements[0]['name'] === "Phone") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <PhoneQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
              </div>)
          }
          else if (item.elements[0]['name'] === "Website") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <WebsiteQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
              </div>)
          }
          else if (item.elements[0]['name'] === "Date") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <DateQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
              </div>)
          }
          else if (item.elements[0]['name'] === "Picture Choice") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <PictureChoiceQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
              </div>)
          }
          else if (item.elements[0]['name'] === "File Upload") {

            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <FileUploadQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
              </div>)
          }
          else if (item.elements[0]['name'] === "Multiple Choice") {

            console.log(item.elements[0]['optionsList'])
            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <MultiChoiceQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} optionsList={item.elements[0]['optionsList']} />
              </div>)
          }
          else if (item.elements[0]['name'] === "Slider") {


            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <SliderQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
              </div>)
          }
          else if (item.elements[0]['name'] === "Ratings") {
            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <RatingQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} />
              </div>)
          }
          else if (item.elements[0]['name'] === "Drop Down (Single Choice)") {
            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <DropDownQues1 questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} optionsList={item.elements[0]['optionsList']} />
              </div>)
          }
          else if (item.elements[0]['name'] === "Drop Down (Multi Choice)") {
            return (
              <div style={{ border: "2px solid black", marginTop: "10px", padding: "20px" }}>
                <DropDownQues1 questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']} optionsList={item.elements[0]['optionsList']} />
              </div>)
          }

        })}


      </div>
    </>
  )
}
export default ShareForm;

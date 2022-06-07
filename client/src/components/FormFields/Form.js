import React, { useState, useReducer, useEffect } from "react";
import "./Form.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import MultichoiceAllVisible from "./FormFieldTypes/MultichoiceAllVisible";
import SingleLineQues from "./FormFieldTypes/SingleLineQues";
import Phone from "./FormFieldTypes/Phone";
import Email from "./FormFieldTypes/Email";
import TextMultiLine from "./FormFieldTypes/TextMultiLine";
import Slider from "./FormFieldTypes/Slider";
import DropDown from "./FormFieldTypes/DropDown";

import FileUpload from "./FormFieldTypes/FileUpload";
import Date from "./FormFieldTypes/Date";
import Ratings from "./FormFieldTypes/Ratings";
import PictureChoice from "./FormFieldTypes/PictureChoice";
import YesNo from "./FormFieldTypes/YesNo";
import SingleLineText from './ShareFeildsTypes/SingleLineText';
import MultiLineText from "./ShareFeildsTypes/MultiLineText"
import EmailQues from './ShareFeildsTypes/EmailQues';
import PhoneQues from "./ShareFeildsTypes/PhoneQues";
import WebsiteQues from "./ShareFeildsTypes/WebsiteQues";
import DateQues from "./ShareFeildsTypes/DateQues";
import PictureChoiceQues from "./ShareFeildsTypes/PictureChoiceQues";
import FileUploadQues from "./ShareFeildsTypes/FileUploadQues";
import MultiChoice2 from "./ShareFeildsTypes/MultiChoice2";

import SliderQues from "./ShareFeildsTypes/SliderQues";
import RatingQues from "./ShareFeildsTypes/RatingQues"
import DropDownQues1 from './ShareFeildsTypes/DropDownQues1';
import StarIcon from '@mui/icons-material/Star';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios, { Axios } from "axios";
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import {
  Descriptive, Choice,
  fileUpload, Contact,
  General
} from './dropDownitems'
import {
  TabContent, TabPane, Nav,
  NavItem, Row, Col
} from 'reactstrap';
import ShareForm from "./ShareForm";
import Website from "./FormFieldTypes/Website";
import { Button } from "react-bootstrap";


const formId = localStorage.getItem('formInfo')

var defaultJson = [];
defaultJson.Pages = [];
const NewForm = ({ formTitle, formDescription }) => {

  const navigate = useNavigate();
  const [activeFormType, setActiveFormType] = useState()
  const [formType, SetFormType] = useState([]);
  const [currentActiveTab, setCurrentActiveTab] = useState('1');
  const [background, setBackground] = useState('')
  const [ratingEmptyIcon, setRatingEmptyIcon] = useState(<StarIcon fontSize="inherit" />)
  const [ratingIcon, setRatingIcon] = useState('')
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionDescription, setQuestionDescription] = useState('');
  const [active1, setActive1] = useState(true);




  const handleOnDragEnd = (result) => {

    const items = Array.from(formType);
    const [reorderedItem] = items.splice(result.source.index, 1);
    console.log(defaultJson.Pages)
    const [dest] = items.splice(result.destination.index, 1)
    items.splice(result.destination.index, 0, reorderedItem);
    SetFormType(items);

  }
  const onChangeQuestionTitle = (len, e) => {
    setQuestionTitle(e);
    defaultJson.Pages[len].elements[0]['questiontitle'] = e;
  }

  const onChangeQuestionDescription = (len, e) => {

    setQuestionDescription(e);
    defaultJson.Pages[len].elements[0]['questionDescription'] = e;

  }

  const onChangeOptionList = (len, e) => {
    console.log(e);
    defaultJson.Pages[len].elements[0]["optionsList"] = e;

  }

  const share = () => {
    setActive1(false);
  }

  const removeItem = (id) => {
    let newArray = [...formType];

    newArray.splice(id, 1);
    SetFormType(newArray);
  };

  const saveForm = () => {

    const formId = localStorage.getItem('formInfo')


    
    axios.post("http://localhost:9000/form/question", { pages: defaultJson['Pages'], formId: formId })
      .then((res) => {
      navigate("/createform")

      })
  }

  const handleSelect = (e) => {


    if (e == "Single Line text") {

      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <SingleLineQues textcolor={"Pink"} questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)}  />,
          color: "pink"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: '', questionDescription: '', options: false,questionAnswer: "" }] })


    } else if (e == "Multiple Choice") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <MultichoiceAllVisible questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
          color: "orange"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "", optionsList: [], options: true ,questionAnswer: ""}] })

    }
    else if (e == "Website") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Website questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
          color: "orange"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "", options: false,questionAnswer: "" }] })

    }
    else if (e == "Phone") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Phone questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#8b94d9"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    } else if (e == "Email") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Email questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#bcc466"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    } else if (e == "Multi Line Text") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <TextMultiLine questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "yellow"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",options:false,questionAnswer: "" }] })

    } else if (e == "Slider") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Slider questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#32a889"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "" ,options:false,questionAnswer: ""}] })

    } else if (e == "Drop Down (Single Choice)") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <DropDown questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
          color: "#8988a8"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "" ,options:true,questionAnswer: ""}] })

    } else if (e == "Drop Down (Multi Choice)") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <DropDown questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
          color: "#a89888"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",options:true,questionAnswer: "" }] })

    } else if (e == "Picture Choice") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <PictureChoice questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#b37978"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "" ,options:true,questionAnswer: ""}] })

    } else if (e == "Yes/No") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <YesNo questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#b37899"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    } else if (e == "Ratings") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Ratings questionNumber={formType.length + 1} ratingicon={ratingIcon} ratingEmptyIcon={ratingEmptyIcon} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#dd99ff"


        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    } else if (e == "File Upload") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <FileUpload questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#523a63"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    } else if (e == "Date") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Date questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#b3ffb3"

        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "" ,questionAnswer: "",options:false}] })

    }

  };
  return (
    <>
      {active1 ?
        <>
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-lg-12"
                style={{
                  border: "2px solid rgb(220, 220, 220)",
                  boxShadow: "rgba(240, 230, 230, 0.76)",
                }}
              >
                <div className="mt-3" style={{ paddingBottom: "10px" }}>
                  <div className="d-flex flex-row justify-content-between">
                    <h1 style={{ fontSize: "20px" }}>Hyperion / Create Form</h1>
                    <div className="flex flex-row justify-content-between" >
                    <button style={{ backgroundColor: "#39cc83", color: "black", border: "none", borderRadius: "5px", width: "auto", padding: "8px",margin:"8px" }} onClick={share}>Preview</button>
                    <Button style={{ backgroundColor: "#39cc83", color: "black", border: "none", borderRadius: "5px", width: "auto", padding: "8px" ,margin:"8px" }} onClick={saveForm}>Save Form</Button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-main-body container-fluid">
            <div className="row">
              <div className="col-lg-9" style={{ paddingLeft: "0" }}>
                <Tabs>
                  <div className="row forms-views " >

                    <div className="column form-area" style={{ height: "700px" }}>
                      <div className=" side-panel tools-side-bar">
                        <div className="add-button">
                          <DropdownButton
                            key="end"
                            drop="end"
                            id={`dropdown-button-drop-end`}
                            title="+"
                            onSelect={handleSelect}
                          >
                            <div className="container-fluid">
                              <div className="row row1">
                                <div className="column">
                                  <h1 className="headings descriptive">
                                    Descriptive Fields
                                  </h1>
                                  {Descriptive.map((item) => {

                                    return (
                                      <Dropdown.Item
                                        className="drop-down-item-row1"
                                        eventKey={item.text}
                                      >
                                        <div style={{ gap: "5px" }} className="d-flex flex-row align-items-center space-around-between">
                                          <div>{item.iconName}</div>
                                          <div>{item.text}</div>
                                        </div>
                                      </Dropdown.Item>
                                    );
                                  })}
                                </div>
                                <div className="column">
                                  <h1 className="headings choice">Choice</h1>
                                  {Choice.map((item) => {
                                    return (
                                      <Dropdown.Item
                                        className="drop-down-item-row1"
                                        style={{ backgroundColor: item.color }}
                                        eventKey={item.text}
                                      >
                                        <div style={{ gap: "5px" }} className="d-flex flex-row align-items-center space-around-between">
                                          <div>{item.iconName}</div>
                                          <div>{item.text}</div>
                                        </div>
                                      </Dropdown.Item>
                                    );
                                  })}
                                </div>
                                <div className="column">
                                  <h1 className="headings upload">Upload</h1>
                                  {fileUpload.map((item) => {
                                    return (
                                      <Dropdown.Item
                                        className="drop-down-item-row1"
                                        style={{ backgroundColor: item.color }}
                                        eventKey={item.text}
                                      >
                                        <div style={{ gap: "5px" }} className="d-flex flex-row align-items-center space-around-between">
                                          <div>{item.iconName}</div>
                                          <div>{item.text}</div>
                                        </div>
                                      </Dropdown.Item>
                                    );
                                  })}
                                </div>
                              </div>
                              <div className="row row1">
                                <div className="column drop-down-item-row2 general-items">
                                  <h1 className="headings general">General</h1>
                                  {General.map((item) => {
                                    return (
                                      <Dropdown.Item
                                        style={{ backgroundColor: item.color }}
                                        eventKey={item.text}
                                      >
                                        <div style={{ gap: "5px" }} className="d-flex flex-row align-items-center space-around-between">
                                          <div>{item.iconName}</div>
                                          <div>{item.text}</div>
                                        </div>
                                      </Dropdown.Item>
                                    );
                                  })}
                                </div>
                                <div className="column drop-down-item-row2 contact-items">
                                  <h1 className="headings contact">Contact</h1>
                                  {Contact.map((item) => {
                                    return (
                                      <Dropdown.Item eventKey={item.text}>
                                        <div style={{ gap: "5px" }} className="d-flex flex-row align-items-center space-around-between">
                                          <div>{item.iconName}</div>
                                          <div>{item.text}</div>
                                        </div>
                                      </Dropdown.Item>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </DropdownButton>
                        </div>
                        <TabList>
                          <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="Tab-list" >
                              {
                                (provided) => (
                                  <div className="Tab-list"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}>
                                    {formType.map((item, key) => {
                                      return (
                                        <>
                                          <Draggable
                                            key={key}
                                            draggableId={"draggable-" + key}
                                            index={key}
                                          >
                                            {(provided) => (
                                              <div ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                <Tab>
                                                  <div
                                                    className="side-bar-content d-flex flex-row align-items-center justify-content-between"
                                                    style={{ backgroundColor: item.color }}
                                                    onClick={() => {
                                                      setActiveFormType(item.field_jsx)
                                                    }}
                                                  >
                                                    <h2 >
                                                      {key + 1}.
                                                      <span style={{ marginLeft: "12px" }}>
                                                        {item.field_type}
                                                      </span>
                                                    </h2>
                                                    <div>
                                                      <i
                                                        onClick={() => {
                                                          removeItem(key);
                                                        }}

                                                        class="fa fa-trash"
                                                        aria-hidden="true"
                                                      ></i>
                                                    </div>
                                                  </div>

                                                </Tab>
                                              </div>
                                            )}
                                          </Draggable>

                                        </>
                                      );
                                    })}
                                    {provided.placeholder}
                                  </div>)}
                            </Droppable>
                          </DragDropContext>
                        </TabList>
                      </div>

                    </div>

                    <div className={`column form-content ${background}`}>

                      {activeFormType}
                    </div>
                  </div>
                </Tabs>
              </div>

              <div className="col-lg-3" style={{ height: "700px" }}>
                <div className="logic-design-side-bar">
                  <Nav tabs>
                    <NavItem>

                    </NavItem>

                  </Nav>
                  <TabContent activeTab={currentActiveTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                          <ul>
                            <li>
                              <button onClick={
                                () => {
                                  setBackground('basic')
                                }
                              } >
                                basic
                              </button>
                            </li>
                            <li>
                              <button onClick={
                                () => {
                                  setBackground('plainblue')
                                }
                              }>
                                plain blue
                              </button>
                            </li>
                            <li>
                              <button onClick={
                                () => {
                                  setBackground('pink')
                                }
                              }>
                                pink
                              </button >
                            </li>
                            <li>
                              <button onClick={
                                () => {
                                  setBackground('orange')
                                }
                              }>
                                orange
                              </button>
                            </li>
                            <li>
                              <button onClick={
                                () => {
                                  setBackground('nightscape')
                                }
                              }>
                                night scape
                              </button>
                            </li>
                            <li>
                              <button onClick={
                                () => {
                                  setBackground('abstract')
                                }
                              }>
                                abtstract
                              </button>
                            </li>
                            <li>
                              <button>
                                fractal
                              </button>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="12">
                          <label for="cars">Choose rating type:</label>


                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>

                </div>
              </div>
            </div>
          </div>
          <div>
            
          </div>
        </>
        : <ShareForm data={defaultJson} formTittle={formTitle} formDescription={formDescription} />}
    </>)
}


var dJson = [];
dJson.Pages = [];


const PreviousForm = ({ question }) => {
  console.log("Questions",question)

  const navigate = useNavigate()
  const [activeFormType, setActiveFormType] = useState()
  const [currentActiveTab, setCurrentActiveTab] = useState('1');
  const [background, setBackground] = useState('')
  const [ratingEmptyIcon, setRatingEmptyIcon] = useState(<StarIcon fontSize="inherit" />)
  const [ratingIcon, setRatingIcon] = useState('')
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionDescription, setQuestionDescription] = useState('');
  const [active, setActive] = useState(true);




  const handleOnDragEnd = (result) => {

    const items = Array.from(formType);
    const [reorderedItem] = items.splice(result.source.index, 1);
    const [dest] = items.splice(result.destination.index, 1)
    items.splice(result.destination.index, 0, reorderedItem);
    SetFormType(items);

  }
  

  

  const removeItem = (id) => {
    let newArray = [...formType];

    newArray.splice(id, 1);
    SetFormType(newArray);
  };

  const saveForm = () => {
    const formId = localStorage.getItem('formInfo')
    axios.post("http://localhost:9000/form/question", { pages: defaultJson['Pages'], formId: formId })
      .then((res) => {
        alert("Form Successfully Saved")
        navigate("/createform")

      })
  }
  var ite = [];

  question["question"].map((item) => {
    console.log(item)
    

    if (item.questionType == "Single Line text") {
        console.log("IAM HERE")
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <SingleLineText questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} />,
          color: "pink"
        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail, options: false,questionAnswer: "" }] })


    } else if (item.questionType == "Multiple Choice") {
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <MultiChoice2 questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail} optionsList={item.options} />,
          color: "orange"
        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail, optionsList: [item.options], options: true,questionAnswer: "" }] })

    }
    else if (item.questionType == "Website") {
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <WebsiteQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail}  options={item.optionsList} />,
          color: "orange"
        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail, options: false,questionAnswer: "" }] })

    }
    else if (item.questionType == "Phone") {
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <PhoneQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail}   />,
          color: "#8b94d9"
        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail,questionAnswer: "" }] })

    } else if (item.questionType == "Email") {
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <EmailQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail}  />,
          color: "#bcc466"
        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail,questionAnswer: "" }] })

    } else if (item.questionType == "Multi Line text") {
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <MultiLineText questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail}  />,
          color: "yellow"
        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail,questionAnswer: "" }] })

    } else if (item.questionType == "Slider") {
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <SliderQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail}  />,
          color: "#32a889"
        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail,questionAnswer: "" }] })

    } else if (item.questionType == "Drop Down (Single Choice)") {
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <DropDownQues1 questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail}  optionsList={item.options} />,
          color: "#8988a8"
        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail,questionAnswer: "" }] })

    } else if (item.questionType == "Drop Down (Multi Choice)") {
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <DropDownQues1 questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail}  optionsList={item.options} />,
          color: "#a89888"
        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail,questionAnswer: "" }] })

    } else if (item.questionType == "Picture Choice") {
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <PictureChoiceQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail}  />,
          color: "#b37978"
        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail,questionAnswer: "" }] })

    } else if (item.questionType == "Yes/No") {
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <YesNo questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail}  />,
          color: "#b37899"
        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail,questionAnswer: "" }] })

    } else if (item.questionType == "Ratings") {
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <RatingQues questionNumber={item.questionNumber} ratingicon={ratingIcon} ratingEmptyIcon={ratingEmptyIcon} ques={item.questionText} description={item.questionDetail}  />,
          color: "#dd99ff"


        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail,questionAnswer: "" }] })

    } else if (item.questionType == "File Upload") {
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <FileUploadQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail}  />,
          color: "#523a63"
        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail,questionAnswer: "" }] })

    } else if (item.questionType == "Date") {
      ite = [
        ...ite,
        {
          field_type: item.questionType,
          field_jsx: <DateQues questionNumber={item.questionNumber} ques={item.questionText} description={item.questionDetail}  />,
          color: "#b3ffb3"

        },
      ];
      dJson.Pages.push({ name: "Page " + item.questionNumber, elements: [{ name: item.questionType, questionNumber: item.questionNumber, questiontitle: item.questionText, questionDescription: item.questionDetail,questionAnswer: "" ,options:false}] })

    }
  })

  const [formType, SetFormType ] = useState(ite);
  const onChangeQuestionTitle = (len, e) => {
    setQuestionTitle(e);
    dJson.Pages[len].elements[0]['questiontitle'] = e;


  }
  const onChangeQuestionDescription = (len, e) => {

    setQuestionDescription(e);
    dJson.Pages[len].elements[0]['questionDescription'] = e;

  }

  const onChangeOptionList = (len, e) => {
    console.log(e);
    dJson.Pages[len].elements[0].optionsList = e;

  }
  const share = () => {
    setActive(false);
  }
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  }



  const handleSelect = (e) => {

    
    if (e == "Single Line text") {

      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <SingleLineQues questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "pink"
        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: '', questionDescription: '', options: false,questionAnswer: "" }] })


    } else if (e == "Multiple Choice") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <MultichoiceAllVisible questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
          color: "orange"
        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "", optionsList: [], options: true,questionAnswer: "" }] })

    }
    else if (e == "Website") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Website questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
          color: "orange"
        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "", options: false ,questionAnswer: ""}] })

    }
    else if (e == "Phone") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Phone questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#8b94d9"
        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    } else if (e == "Email") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Email questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#bcc466"
        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    } else if (e == "Multi Line Text") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <TextMultiLine questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "yellow"
        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    }
    else if (e == "Multi Line text") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <TextMultiLine questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "yellow"
        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    }

     else if (e == "Slider") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Slider questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#32a889"
        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    } else if (e == "Drop Down (Single Choice)") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <DropDown questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
          color: "#8988a8"
        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    } else if (e == "Drop Down (Multi Choice)") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <DropDown questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
          color: "#a89888"
        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    } else if (e == "Picture Choice") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <PictureChoice questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#b37978"
        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    } else if (e == "Yes/No") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <YesNo questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#b37899"
        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "" ,questionAnswer: ""}] })

    } else if (e == "Ratings") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Ratings questionNumber={formType.length + 1} ratingicon={ratingIcon} ratingEmptyIcon={ratingEmptyIcon} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#dd99ff"


        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    } else if (e == "File Upload") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <FileUpload questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#523a63"
        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",questionAnswer: "" }] })

    } else if (e == "Date") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Date questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#b3ffb3"

        },
      ]);
      dJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "" ,questionAnswer: ""}], options: false })
    }

  };
  
  return (
    <>
      {active ?
        <>
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-lg-12"
                style={{
                  border: "2px solid rgb(220, 220, 220)",
                  boxShadow: "rgba(240, 230, 230, 0.76)",
                }}
              >
                <div className="mt-3" style={{ paddingBottom: "10px" }}>
                  <div className="d-flex flex-row justify-content-between">
                    <h1 style={{ fontSize: "20px" }}>Hyperion / Create Form</h1>
                    <div className="flex flex-row justify-content-between" >
                    <button style={{ backgroundColor: "#39cc83", color: "black", border: "none", borderRadius: "5px", width: "auto", padding: "8px",margin:"8px" }} onClick={share}>Preview</button>
                    <Button style={{ backgroundColor: "#39cc83", color: "black", border: "none", borderRadius: "5px", width: "auto", padding: "8px" ,margin:"8px" }} onClick={saveForm}>Save Form</Button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-main-body container-fluid">
            <div className="row">
              <div className="col-lg-9" style={{ paddingLeft: "0" }}>
                <Tabs>
                  <div className="row forms-views " >

                    <div className="column form-area" style={{ height: "700px" }}>
                      <div className=" side-panel tools-side-bar">
                        <div className="add-button">
                          <DropdownButton
                            key="end"
                            drop="end"
                            id={`dropdown-button-drop-end`}
                            title="+"
                            onSelect={handleSelect}
                          >
                            <div className="container-fluid">
                              <div className="row row1">
                                <div className="column">
                                  <h1 className="headings descriptive">
                                    Descriptive Fields
                                  </h1>
                                  {Descriptive.map((item) => {

                                    return (
                                      <Dropdown.Item
                                        className="drop-down-item-row1"
                                        eventKey={item.text}
                                      >
                                        <div style={{ gap: "5px" }} className="d-flex flex-row align-items-center space-around-between">
                                          <div>{item.iconName}</div>
                                          <div>{item.text}</div>
                                        </div>
                                      </Dropdown.Item>
                                    );
                                  })}
                                </div>
                                <div className="column">
                                  <h1 className="headings choice">Choice</h1>
                                  {Choice.map((item) => {
                                    return (
                                      <Dropdown.Item
                                        className="drop-down-item-row1"
                                        style={{ backgroundColor: item.color }}
                                        eventKey={item.text}
                                      >
                                        <div style={{ gap: "5px" }} className="d-flex flex-row align-items-center space-around-between">
                                          <div>{item.iconName}</div>
                                          <div>{item.text}</div>
                                        </div>
                                      </Dropdown.Item>
                                    );
                                  })}
                                </div>
                                <div className="column">
                                  <h1 className="headings upload">Upload</h1>
                                  {fileUpload.map((item) => {
                                    return (
                                      <Dropdown.Item
                                        className="drop-down-item-row1"
                                        style={{ backgroundColor: item.color }}
                                        eventKey={item.text}
                                      >
                                        <div style={{ gap: "5px" }} className="d-flex flex-row align-items-center space-around-between">
                                          <div>{item.iconName}</div>
                                          <div>{item.text}</div>
                                        </div>
                                      </Dropdown.Item>
                                    );
                                  })}
                                </div>
                              </div>
                              <div className="row row1">
                                <div className="column drop-down-item-row2 general-items">
                                  <h1 className="headings general">General</h1>
                                  {General.map((item) => {
                                    return (
                                      <Dropdown.Item
                                        style={{ backgroundColor: item.color }}
                                        eventKey={item.text}
                                      >
                                        <div style={{ gap: "5px" }} className="d-flex flex-row align-items-center space-around-between">
                                          <div>{item.iconName}</div>
                                          <div>{item.text}</div>
                                        </div>
                                      </Dropdown.Item>
                                    );
                                  })}
                                </div>
                                <div className="column drop-down-item-row2 contact-items">
                                  <h1 className="headings contact">Contact</h1>
                                  {Contact.map((item) => {
                                    return (
                                      <Dropdown.Item eventKey={item.text}>
                                        <div style={{ gap: "5px" }} className="d-flex flex-row align-items-center space-around-between">
                                          <div>{item.iconName}</div>
                                          <div>{item.text}</div>
                                        </div>
                                      </Dropdown.Item>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </DropdownButton>
                        </div>
                        <TabList>
                          <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="Tab-list" >
                              {
                                (provided) => (
                                  <div className="Tab-list"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}>
                                    {formType.map((item, key) => {
                                      
                                      return (
                                        <>
                                          <Draggable
                                            key={key}
                                            draggableId={"draggable-" + key}
                                            index={key}
                                          >
                                            {(provided) => (
                                              <div ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                <Tab>
                                                  <div
                                                    className="side-bar-content d-flex flex-row align-items-center justify-content-between"
                                                    style={{ backgroundColor: item.color }}
                                                    onClick={() => {
                                                      setActiveFormType(item.field_jsx)
                                                    }}
                                                  >
                                                    <h2 >
                                                      {key + 1}.
                                                      <span style={{ marginLeft: "12px" }}>
                                                        {item.field_type}
                                                      </span>
                                                    </h2>
                                                    <div>
                                                      <i
                                                        onClick={() => {
                                                          removeItem(key);
                                                        }}

                                                        class="fa fa-trash"
                                                        aria-hidden="true"
                                                      ></i>
                                                    </div>
                                                  </div>

                                                </Tab>
                                              </div>
                                            )}
                                          </Draggable>

                                        </>
                                      );
                                    })}
                                    {provided.placeholder}
                                  </div>)}
                            </Droppable>
                          </DragDropContext>
                        </TabList>
                      </div>

                    </div>

                    <div className={`column form-content ${background}`}>

                      {activeFormType}
                    </div>
                  </div>
                </Tabs>
              </div>

              <div className="col-lg-3" style={{ height: "700px" }}>
                <div className="logic-design-side-bar">
                  <Nav tabs>
                    <NavItem>

                    </NavItem>

                  </Nav>
                  <TabContent activeTab={currentActiveTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                          <ul>
                            <li>
                              <button onClick={
                                () => {
                                  setBackground('basic')
                                }
                              } >
                                basic
                              </button>
                            </li>
                            <li>
                              <button onClick={
                                () => {
                                  setBackground('plainblue')
                                }
                              }>
                                plain blue
                              </button>
                            </li>
                            <li>
                              <button onClick={
                                () => {
                                  setBackground('pink')
                                }
                              }>
                                pink
                              </button >
                            </li>
                            <li>
                              <button onClick={
                                () => {
                                  setBackground('orange')
                                }
                              }>
                                orange
                              </button>
                            </li>
                            <li>
                              <button onClick={
                                () => {
                                  setBackground('nightscape')
                                }
                              }>
                                night scape
                              </button>
                            </li>
                            <li>
                              <button onClick={
                                () => {
                                  setBackground('abstract')
                                }
                              }>
                                abtstract
                              </button>
                            </li>
                            <li>
                              <button>
                                fractal
                              </button>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="12">
                          <label for="cars">Choose rating type:</label>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>

                </div>
              </div>
            </div>
          </div>
          <div>
            
          </div>
        </>
        : <ShareForm data={dJson} formTittle={question["name"]} formDescription={question["description"]} />}
    </>)
}
const Form = () => {

  var formTitle = "";
  var formDescription = "";
  var question = "";

  const location = useLocation();
  if (location.state.item) {
    question = location.state.item;
    console.log(question);
    
    return (<>
      <PreviousForm question={question} />
    </>)
  }
  else {
    formTitle = location.state.title;
    formDescription = location.state.description;
    return (<>
      <NewForm formTitle={formTitle} formDescription={formDescription} />
    </>)

  }



}
export default Form;
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
import StarIcon from '@mui/icons-material/Star';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios, { Axios } from "axios";
import {  useNavigate,useLocation } from 'react-router-dom';
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

var defaultJson = [];
defaultJson.Pages = [];
const formId=localStorage.getItem('formInfo')
const Form = () => {
  const location = useLocation();
  console.log(location.state)
  // const question=location.state.item.question
  // const formTitle = location.state.title;

  const formTitle=''
  // const formDescription = location.state.description; 
  const formDescription=''
  const [activeFormType, setActiveFormType] = useState()
  const [formType, SetFormType] = useState([]);
  const [currentActiveTab, setCurrentActiveTab] = useState('1');
  const [background, setBackground] = useState('')
  const [ratingEmptyIcon, setRatingEmptyIcon] = useState(<StarIcon fontSize="inherit" />)
  const [ratingIcon, setRatingIcon] = useState('')
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionDescription, setQuestionDescription] = useState('');
  const [active, setActive] = useState(true);

  const onChangeQuestionTitle = (len, e) => {
    setQuestionTitle(e);
    defaultJson.Pages[len].elements[0]['questiontitle'] = e;


  }

  const handleOnDragEnd = (result) => {
    
    const items = Array.from(formType);
    console.log(items)
    const [reorderedItem] = items.splice(result.source.index, 1);
    console.log(defaultJson.Pages)
    const [dest] = items.splice(result.destination.index,1)
    items.splice(result.destination.index, 0, reorderedItem);
    
    SetFormType(items);

  }

  const onChangeQuestionDescription = (len, e) => {

    setQuestionDescription(e);
    defaultJson.Pages[len].elements[0]['questionDescription'] = e;
    
  }

  const onChangeOptionList = (len, e) => {
    console.log(e);
    defaultJson.Pages[len].elements[0].optionsList = e;
    
  }

  const share = () => {
    setActive(false);
  }

  const removeItem = (id) => {
    let newArray = [...formType];

    newArray.splice(id, 1);
    SetFormType(newArray);
  };

  const saveForm=()=>{

   
   
    axios.post("http://localhost:9000/form/question", {pages:defaultJson['Pages'],formId:formId})
    .then((res)=>{
     console.log(res)

    })
  } 
  


// for (let i=0;i<question;i++){
  

//   if (question[i].QuestionType == "Single Line text") {

//     SetFormType([
//       ...formType,
//       {
//         field_type: question[i].QuestionType,
//         field_jsx: <SingleLineQues questionNumber={formType.length + 1} onQuestionTitleChange={() => onChangeQuestionTitle(formType.length, question[i].questionText)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
//         color: "pink"
//       },
//     ]);
//     defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: question[i].questionText, questionNumber: formType.length + 1, questiontitle: question[i].questionText, questionDescription: question[i].questionDetail,options:false }] })


//   } else if (question[i].QuestionType == "Multiple Choice") {
//     SetFormType([
//       ...formType,
//       {
//         field_type: e,
//         field_jsx: <MultichoiceAllVisible questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, question[i].questionText)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
//         color: "orange"
//       },
//     ]);
//     defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1,questiontitle: question[i].questionText, questionDescription: question[i].questionDetail, optionsList: [],options:true }] })

//   }
//   else if (question[i].QuestionType  == "Website")
//   {
//     SetFormType([
//       ...formType,
//       {
//         field_type: e,
//         field_jsx: <Website questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
//         color: "orange"
//       },
//     ]);
//     defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: question[i].questionText, questionDescription: question[i].questionDetail,options:false }] })

//   }
//    else if (question[i].QuestionType  == "Phone") {
//     SetFormType([
//       ...formType,
//       {
//         field_type: e,
//         field_jsx: <Phone questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
//         color: "#8b94d9"
//       },
//     ]);
//     defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle: question[i].questionText, questionDescription: question[i].questionDetail}] })
    
//   } else if (question[i].QuestionType == "Email") {
//     SetFormType([
//       ...formType,
//       {
//         field_type: e,
//         field_jsx: <Email questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
//         color: "#bcc466"
//       },
//     ]);
//     defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle: question[i].questionText, questionDescription: question[i].questionDetail}] })
    
//   } else if (question[i].QuestionType  == "Multi Line Text") {
//     SetFormType([
//       ...formType,
//       {
//         field_type: e,
//         field_jsx: <TextMultiLine questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
//         color: "yellow"
//       },
//     ]);
//     defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle: question[i].questionText, questionDescription: question[i].questionDetail}] })
    
//   } else if (question[i].QuestionType == "Slider") {
//     SetFormType([
//       ...formType,
//       {
//         field_type: e,
//         field_jsx: <Slider questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
//         color: "#32a889"
//       },
//     ]);
//     defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle: question[i].questionText, questionDescription: question[i].questionDetail}] })
    
//   } else if (question[i].QuestionType  == "Drop Down (Single Choice)") {
//     SetFormType([
//       ...formType,
//       {
//         field_type: e,
//         field_jsx: <DropDown questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
//         color: "#8988a8"
//       },
//     ]);
//     defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle: question[i].questionText, questionDescription: question[i].questionDetail}] })
    
//   } else if (question[i].QuestionType  == "Drop Down (Multi Choice)") {
//     SetFormType([
//       ...formType,
//       {
//         field_type: e,
//         field_jsx: <DropDown questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
//         color: "#a89888"
//       },
//     ]);
//     defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle: question[i].questionText, questionDescription: question[i].questionDetail}] })
    
//   } else if (question[i].QuestionType == "Picture Choice") {
//     SetFormType([
//       ...formType,
//       {
//         field_type: e,
//         field_jsx: <PictureChoice questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
//         color: "#b37978"
//       },
//     ]);
//     defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle: question[i].questionText, questionDescription: question[i].questionDetail}] })
    
//   } else if (question[i].QuestionType  == "Yes/No") {
//     SetFormType([
//       ...formType,
//       {
//         field_type: e,
//         field_jsx: <YesNo questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)}/>,
//         color: "#b37899"
//       },
//     ]);
//     defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle: question[i].questionText, questionDescription: question[i].questionDetail}] })
    
//   } else if (question[i].QuestionType  == "Ratings") {
//     SetFormType([
//       ...formType,
//       {
//         field_type: e,
//         field_jsx: <Ratings questionNumber={formType.length + 1} ratingicon={ratingIcon} ratingEmptyIcon={ratingEmptyIcon} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
//         color: "#dd99ff"


//       },
//     ]);
//     defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle: question[i].questionText, questionDescription: question[i].questionDetail}] })
    
//   } else if (question[i].QuestionType == "File Upload") {
//     SetFormType([
//       ...formType,
//       {
//         field_type: e,
//         field_jsx: <FileUpload questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
//         color: "#523a63"
//       },
//     ]);
//     defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle: question[i].questionText, questionDescription: question[i].questionDetail}] })
    
//   } else if (question[i].QuestionType == "Date") {
//     SetFormType([
//       ...formType,
//       {
//         field_type: e,
//         field_jsx: <Date questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
//         color: "#b3ffb3"

//       },
//     ]);
//     defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: question[i].questionText, questionDescription: question[i].questionDetail}] ,options:false})

//   }
 
//  }

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
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: '', questionDescription: '',options:false }] })


    } else if (e == "Multiple Choice") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <MultichoiceAllVisible questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
          color: "orange"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "", optionsList: [],options:true }] })

    }
    else if (e == "Website")
    {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Website questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
          color: "orange"
        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "",options:false }] })

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
      defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle:"",questionDescription:""}] })
      
    } else if (e == "Email") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Email questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#bcc466"
        },
      ]);
      defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle:"",questionDescription:""}] })
      
    } else if (e == "Multi Line Text") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <TextMultiLine questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "yellow"
        },
      ]);
      defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle:"",questionDescription:""}] })
      
    } else if (e == "Slider") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Slider questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#32a889"
        },
      ]);
      defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle:"",questionDescription:""}] })
      
    } else if (e == "Drop Down (Single Choice)") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <DropDown questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
          color: "#8988a8"
        },
      ]);
      defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle:"",questionDescription:""}] })
      
    } else if (e == "Drop Down (Multi Choice)") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <DropDown questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} onOptionListChange={(e) => onChangeOptionList(formType.length, e)} />,
          color: "#a89888"
        },
      ]);
      defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle:"",questionDescription:""}] })
      
    } else if (e == "Picture Choice") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <PictureChoice questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#b37978"
        },
      ]);
      defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle:"",questionDescription:""}] })
      
    } else if (e == "Yes/No") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <YesNo questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)}/>,
          color: "#b37899"
        },
      ]);
      defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle:"",questionDescription:""}] })
      
    } else if (e == "Ratings") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Ratings questionNumber={formType.length + 1} ratingicon={ratingIcon} ratingEmptyIcon={ratingEmptyIcon} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#dd99ff"


        },
      ]);
      defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle:"",questionDescription:""}] })
      
    } else if (e == "File Upload") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <FileUpload questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#523a63"
        },
      ]);
      defaultJson.Pages.push({name:"Page "+formType.length,elements:[{name:e,questionNumber:formType.length + 1,questiontitle:"",questionDescription:""}] })
      
    } else if (e == "Date") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Date questionNumber={formType.length + 1} onQuestionTitleChange={(e) => onChangeQuestionTitle(formType.length, e)} onQuestionDescriptionChange={(e) => onChangeQuestionDescription(formType.length, e)} />,
          color: "#b3ffb3"

        },
      ]);
      defaultJson.Pages.push({ name: "Page " + formType.length, elements: [{ name: e, questionNumber: formType.length + 1, questiontitle: "", questionDescription: "" }] ,options:false})

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
                    <Button style={{ backgroundColor: "#39cc83", color: "black", border: "none", borderRadius: "5px", width: "auto", padding: "8px" }} onClick={saveForm}>Save Form</Button>
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
            <button style={{ backgroundColor: "#39cc83", color: "black", border: "none", borderRadius: "5px", width: "auto", padding: "8px" }} onClick={share}>Preview</button>
          </div>
        </>
        : <ShareForm data={defaultJson} formTitle = {formTitle} formDescription={formDescription} />}



    </>)


}
export default Form;
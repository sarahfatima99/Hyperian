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
import Website from './FormFieldTypes/Website'
import Ratings from "./FormFieldTypes/Ratings";
import PictureChoice from "./FormFieldTypes/PictureChoice";
import YesNo from "./FormFieldTypes/YesNo";
import SingleChoiceAllVisible from './FormFieldTypes/SingleChoiceAllVisible'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

import {
  DragDropContext
  , Droppable,
  Draggable
} from 'react-beautiful-dnd';
import DialogSelect from './DialogSelect'
import {
  Descriptive, Choice,
  fileUpload, Contact,
  General
} from './dropDownitems'
import {
  TabContent, TabPane, Nav,
  NavItem, NavLink, Row, Col
} from 'reactstrap';
import classnames from 'classnames';
import SingleUploader from "./FormFieldTypes/PictureChoice";

const Form = () => {

  // const [characters, updateCharacters] = useState(finalSpaceCharacters);
  const [formType, SetFormType] = useState([]);
  const [currentActiveTab, setCurrentActiveTab] = useState('1');
  const [background, setBackground] = useState('')
  const [textcolor, setTextcolor] = useState('')
  const [ratingEmptyIcon, setRatingEmptyIcon] = useState(<StarIcon fontSize="inherit" />)
  const [ratingIcon, setRatingIcon] = useState('')
  const [showType,setShowType]=useState('')
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  }
  const handleSelect = (e) => {
    if (e == "Single Line text") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <SingleLineQues questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "pink"
        },
      ]);
    } else if (e == "Multiple Choice") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <MultichoiceAllVisible questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "orange"
        },
      ]);
    }
    else if (e == "SingleChoiceAllVisible") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <SingleChoiceAllVisible questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "#E6D5B8"
        },
      ]);
    }
    else if (e == "Website") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Website questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "#DEB6AB"
        },
      ]);
    }
    else if (e == "Phone") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Phone questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "#8b94d9"
        },
      ]);
    } else if (e == "Email") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Email questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "#bcc466"
        },
      ]);
    } else if (e == "Multi Line Text") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <TextMultiLine questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "yellow"
        },
      ]);
    } else if (e == "Slider") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Slider questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "#32a889"
        },
      ]);
    } else if (e == "Drop Down (Single Choice)") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <DropDown questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "#8988a8"
        },
      ]);
    } else if (e == "Drop Down (Multi Choice)") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <DropDown questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "#a89888"
        },
      ]);
    } else if (e == "Picture Choice") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <PictureChoice questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "#b37978"
        },
      ]);
    } else if (e == "Yes/No") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <YesNo questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "#b37899"
        },
      ]);
    } else if (e == "Ratings") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Ratings questionNumber={formType.length + 1} textcolor={textcolor} ratingicon={ratingIcon} ratingEmptyIcon={ratingEmptyIcon} />,
          color: "#dd99ff"


        },
      ]);
    } else if (e == "File Upload") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <FileUpload questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "#523a63"
        },
      ]);
    } else if (e == "Date") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Date questionNumber={formType.length + 1} textcolor={textcolor} />,
          color: "#b3ffb3"

        },
      ]);
    }
    
  };

  const handleOnDragEnd = (result) => {
    console.log(result)
    const items = Array.from(formType);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    SetFormType(items);
    console.log(formType)
  }

  
  const removeItem = (id) => {
    let newArray = [...formType];

    newArray.splice(id, 1);
    SetFormType(newArray);
  };

  return (
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
                        <Droppable droppableId="Tab-list">
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
                                                onClick={(e) => {
                                                  console.log(item)
                                                  setShowType(item.field_jsx)
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

               {
                 showType
               }
                </div>
              </div>
            </Tabs>
          </div>

          <div className="col-lg-3" style={{ height: "700px" }}>
            <div className="logic-design-side-bar">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active:
                        currentActiveTab === '1'
                    },
                      'tab-nav-link ')}
                    onClick={() => { toggle('1'); }}
                  > 
                    Themes
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active:
                        currentActiveTab === '2'
                    }, 'tab-nav-link ')}
                    onClick={() => { toggle('2'); }}
                  >

                    Design
                  </NavLink>
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

                      <select name="starts" id="rating" >
                        <option value="select">select</option>
                        <option value="heart">heart</option>
                        <option value="saab">faces</option>
                        <option value="mercedes">world</option>
                        <option value="audi">Audi</option>
                      </select>

                    </Col>
                  </Row>
                </TabPane>
              </TabContent>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

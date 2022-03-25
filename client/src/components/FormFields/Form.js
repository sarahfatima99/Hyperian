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
import { FaAlipay } from "react-icons/fa";
import FileUpload from "./FormFieldTypes/FileUpload";
import Date from "./FormFieldTypes/Date";
import Ratings from "./FormFieldTypes/Ratings";
import PictureChoice from "./FormFieldTypes/PictureChoice";
import YesNo from "./FormFieldTypes/YesNo";
import NavTabs from "./NavTabs";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PowerInputOutlinedIcon from '@mui/icons-material/PowerInputOutlined';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import EventIcon from '@mui/icons-material/Event';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import PictureInPictureIcon from '@mui/icons-material/PictureInPicture';
import AdjustIcon from '@mui/icons-material/Adjust';
import FlakyIcon from '@mui/icons-material/Flaky';
import GradeIcon from '@mui/icons-material/Grade';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';



const Form = () => {
  const Descriptive = [
    {
      text:"Single Line text",
      iconName:<PowerInputOutlinedIcon/>,
    },
    {
      text: "Multi Line Text",
      iconName: <FormatLineSpacingIcon/>,
    },
    {
      text: "Email",
      iconName: <EmailOutlinedIcon/>,
    },
    {
      text: "Phone",
      iconName: <PhoneCallbackIcon/>,
    },
    {
      text: "Website",
      iconName: <WebAssetIcon/>,
    },
    {
      text: "Date",
      iconName: <EventIcon/>,
    },
    
  
  ];

  const Choice = [
    {
      text:"Multiple Choice",
      iconName:<SwitchAccountIcon/>,
    },
    {
      text:"Single Choice",
      iconName:<SwitchAccountIcon/>,
    },
    {
      text:"Drop Down (Single Choice)",
      iconName:<ArrowDropDownIcon/>,
    },
    {
      text:"Drop Down (Multi Choice)",
      iconName:<ArrowDropDownCircleIcon/>,
    },
    {
      text:"Picture Choice",
      iconName:<PictureInPictureIcon/>,
    },
    {
      text:"Slider",
      iconName:<AdjustIcon/>,
    },
    {
      text:"Yes/No",
      iconName:<FlakyIcon/>,
    },
    {
      text:"Ratings",
      iconName:<GradeIcon/>,
    },

  ];

  const File_Upload = [
    {
      text:"Picture Choice",
      iconName:<PictureInPictureIcon/>,
    },
    {
      text:"File Upload",
      iconName:<DriveFolderUploadIcon/>,
    },
    
  ];
  const Contact = [
    {
      text:"Email",
      iconName:<EmailOutlinedIcon/>,
    },
    {
      text:"Phone",
      iconName:<PhoneCallbackIcon/>,
    },
    {
      text:"Website",
      iconName:<WebAssetIcon/>,
    },
    ];
  const General = [
    {
      text:"Single Line text",
      iconName:<PowerInputOutlinedIcon/>,
    },
    {
      text:"Multi Line text",
      iconName:<FormatLineSpacingIcon/>,
    },
    {
      text:"File Upload",
      iconName:<DriveFolderUploadIcon/>,
    },
    {
      text:"Multiple Choice",
      iconName:<SwitchAccountIcon/>,
    },
  
  ];
  const [formType, SetFormType] = useState([]);

  const handleSelect = (e) => {
    if (e == "Single Line text") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <SingleLineQues />,
          color: "pink",
          icon: "PhoneCallbackIcon",
        },
      ]);
    } else if (e == "Multiple Choice") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <MultichoiceAllVisible />,
          color: "orange",
          icon: "PhoneCallbackIcon",
        },
      ]);
    } else if (e == "Phone") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Phone />,
          color: "#8b94d9",
          icon: "PhoneCallbackIcon",
        },
      ]);
    } else if (e == "Email") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Email />,
          color: "#bcc466",
          icon: "PhoneCallbackIcon",
        },
      ]);
    } else if (e == "Multi Line Text") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <TextMultiLine />,
          color: "yellow",
          icon: "PhoneCallbackIcon",
        },
      ]);
    } else if (e == "Slider") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Slider />,
          color: "#32a889",
          icon: "PhoneCallbackIcon",
        },
      ]);
    } else if (e == "Drop Down (Single Choice)") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <DropDown />,
          color: "#8988a8",
          icon: "PhoneCallbackIcon",
        },
      ]);
    } else if (e == "Drop Down (Multi Choice)") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <DropDown />,
          color: "#a89888",
          icon: "PhoneCallbackIcon",
        },
      ]);
    } else if (e == "Picture Choice") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <PictureChoice />,
          color: "#b37978",
          icon: "PhoneCallbackIcon",
        },
      ]);
    } else if (e == "Yes/No") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <YesNo />,
          color: "#b37899",
          icon: "PhoneCallbackIcon",
        },
      ]);
    } else if (e == "Ratings") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Ratings />,
          color: "#3a4163",
          icon: "PhoneCallbackIcon",
        },
      ]);
    } else if (e == "File Upload") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <FileUpload />,
          color: "#523a63",
          icon: "PhoneCallbackIcon",
        },
      ]);
    } else if (e == "Date") {
      SetFormType([
        ...formType,
        {
          field_type: e,
          field_jsx: <Date />,
          color: "#69384b",
          icon: "PhoneCallbackIcon",
        },
      ]);
    }
  };
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
              <div className="row forms-views ">
                <div className="column side-panel">
                  <div className="tools-side-bar">
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
                                    <div style={{gap:"5px"}} className="d-flex flex-row align-items-center space-around-between">
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
                                   <div style={{gap:"5px"}} className="d-flex flex-row align-items-center space-around-between">
                                      <div>{item.iconName}</div>
                                      <div>{item.text}</div>
                                    </div>
                                  </Dropdown.Item>
                                );
                              })}
                            </div>
                            <div className="column">
                              <h1 className="headings upload">Upload</h1>
                              {File_Upload.map((item) => {
                                return (
                                  <Dropdown.Item
                                    className="drop-down-item-row1"
                                    style={{ backgroundColor: item.color }}
                                    eventKey={item.text}
                                  >
                                 <div style={{gap:"5px"}} className="d-flex flex-row align-items-center space-around-between">
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
                                    <div style={{gap:"5px"}} className="d-flex flex-row align-items-center space-around-between">
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
                                    <div style={{gap:"5px"}} className="d-flex flex-row align-items-center space-around-between">
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
                    <div className="column">
                      <TabList>
                        <div className="Tab-list">
                          {formType.map((item, key) => {
                            return (
                              <>
                                <Tab>
                                  <div
                                    className="side-bar-content d-flex flex-row align-items-center justify-content-between"
                                    style={{ backgroundColor: item.color }}
                                  >
                                    <h2 >
                                      {key + 1}. 
                                      <span className="feild-name-hover">
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
                              </>
                            );
                          })}
                        </div>
                      </TabList>
                    </div>
                  </div>
                </div>
                <div className="column form-area">
                  {formType.map((item, key) => {
                    return (
                      <TabPanel>
                        <div className="panel-content">
                          <h2>{item.field_jsx}</h2>
                        </div>
                      </TabPanel>
                    );
                  })}
                </div>
              </div>
            </Tabs>
          </div>
          <div className=" col-lg-3">
            <div className="logic-design-side-bar">
              <NavTabs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

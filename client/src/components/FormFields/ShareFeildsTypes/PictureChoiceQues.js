import React from 'react';
import upload from "../../../images/upload.png";
import  { useState } from 'react';
import _ from 'lodash';

const SingleUploader = ({questionNumber , ques,description}) => {
 

  const [isUploding, setUploding] = useState(false);
  const [uploadedImg, setUplodedImg] = useState("");
  const [uploadProgress, setProgress] = useState(0);



  const handleChange = async e => {
      
      
      setUploding(true);
      const reader = new FileReader();
      reader.onload = () =>{
        if(reader.readyState === 2){
          setUplodedImg(reader.result)
        }
      }
      console.log(e.target.files[0])
      reader.readAsDataURL(e.target.files[0])
  
     
  }

  return (
    <div className=''>
    <span className='ques_no' style={{padding:"20px",margin:"20px"}}>{questionNumber}.</span>
    <input type="text" className='input-ques'  value={ques} />
    <div className='d-flex flex-row align-item-center'>
                    <textarea style={{paddingTop:"0px" ,marginLeft:"95px",marginTop:"0px"}} type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                </div>
      <div className="form-group">
          
          <div className="d-flex">
              <div className="d-flex">
                  <div className="file-uploader-mask d-flex justify-content-center align-items-center">
                      <img className="file-uploader-icon" src={upload} alt="Upload-Icon" />
                  </div>
                  <input className="file-input" type="file" id='' onChange={handleChange} />
              </div>
              
              {
                   (
                      <img
                          src={uploadedImg}
                          alt="Upload here"
                          className="img-thumbnail img-fluid uploaded-img ml-3"
                      />
                  ) 
              }
          </div>
      </div>
      </div>
  )
}


export default SingleUploader;





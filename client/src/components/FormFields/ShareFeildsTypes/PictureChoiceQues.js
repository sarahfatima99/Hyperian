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
    <span className='ques_no'>{questionNumber}.</span>
    <input type="text" className='input-ques'  value={ques} />
    <textarea type="textarea" className='input-ques description' value={description} />
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





import React from 'react';
import "./PictureChoice.css";
import choicepic from "../../../images/choicepic.jpg"
import upload from "../../../images/upload.png";
import { Progress } from 'reactstrap';
import  { useState } from 'react';
import API from "./services";
import _ from 'lodash';

const MultiUploader = (props) => {
    let { id, label, uploadUrl } = props;
    const [isUploding, setUploding] = useState(false);
    const [uploadedImgs, setUplodedImgs] = useState([]);
    const [uploadProgress, setProgress] = useState(0);

    const handleChange = async e => {
        let { files } = e.target;
        console.log(files);

        setUploding(true);
      const reader = new FileReader();
      reader.onload = () =>{
        if(reader.readyState === 2){
          setUplodedImgs(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
        

        
        
        
     
    }
    

    return (
        <div className="form-group">
            <label htmlFor={id} className="text-primary font-weight-bold">{label}</label>
            <div className="d-flex">
                <div className="d-flex">
                    <div className="file-uploader-mask d-flex justify-content-center align-items-center">
                        <img className="file-uploader-icon" src={upload} alt="Upload-Icon" />
                    </div>
                    <input multiple className="file-input" type="file" id={id} onChange={handleChange} />
                </div>
                {/* {
                    isUploding ? (
                        <div className="flex-grow-1 px-2">
                            <div className="text-center">{uploadProgress}%</div>
                            <Progress value={uploadProgress} />
                        </div>
                    ) : null
                } */}
            </div>
            <div className="d-flex flex-wrap mt-4">
                {
                    
                        uploadedImgs.map(uploadedImg => (
                            <img src={uploadedImg} key={uploadedImg} alt="UploadedImage" className="img-thumbnail img-fluid uploaded-img mr-2" />
                        ))
                    
                }
            </div>
        </div>
    )
}
export default MultiUploader;

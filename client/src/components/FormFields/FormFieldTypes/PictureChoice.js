import React from 'react';
import "./PictureChoice.css";
import { Component } from 'react';
import upload from "../../../images/upload.png";
import { Progress } from 'reactstrap';
import  { useState } from 'react';
import API from "./services";
import _ from 'lodash';

const SingleUploader = ({questionNumber , onQuestionTitleChange,onQuestionDescriptionChange}) => {
 

  const [isUploding, setUploding] = useState(false);
  const [uploadedImg, setUplodedImg] = useState("");
  const [uploadProgress, setProgress] = useState(0);

  const Questionvalue = (e) =>{
        
    onQuestionTitleChange(e.target.value);

}

const Descriptionvalue = (e) => {
    
    onQuestionDescriptionChange(e.target.value);
}

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
    <div className='form-type container'>
    <span className='ques_no'>{questionNumber}.</span>
    <input type="text" className='input-ques' placeholder="Enter Question Text" onChange={Questionvalue} />
    <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" onChange={Descriptionvalue} />
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



//  class  PictureChoice extends Component {
//   state ={
//     profileImg: ""

//   }
//   imageHandler = (e) => {
//     const reader = new FileReader();
//     reader.onload = () =>{
//       if(reader.readyState === 2){
//         this.setState({profileImg: reader.result})
//       }
//     }
//     reader.readAsDataURL(e.target.files[0])
//   };
//   render()
//   {
//     const { profileImg} = this.state;
//     return(<>
//           <div className='form-type container'>
//                 <span className='ques_no'>1.</span>
//                 <input type="text" className='input-ques' placeholder="Enter Question Text" />
//                 <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" />
//                 <div className="container container-inner">
//                   <div className='contain d-flex flex-row '>
//                     <div>
// 					<h1 className="heading">Add your Image</h1>
// 					<div className="img-holder">
// 						<img src={profileImg} alt="" id="img" className="imgg" />
// 					</div>
// 					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
// 					<div className="label">
//           <label className="image-upload" htmlFor="input">
// 						Upload from device
// 					</label>
//           </div>
//           </div>
//           <div>
// 					<h1 className="heading">Add your Image</h1>
// 					<div className="img-holder">
// 						<img src={profileImg} alt="" id="img" className="imgg" />
// 					</div>
// 					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
// 					<div className="label">
//           <label className="image-upload" htmlFor="input">
// 						Upload from device
// 					</label>
          
//           </div>
// 				</div>
//         </div>
//         </div>
        
//             </div>

//     </>)
//   }
// }
// export default PictureChoice;

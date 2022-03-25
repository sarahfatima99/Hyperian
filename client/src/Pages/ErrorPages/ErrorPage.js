import React, { useState } from 'react';
import "./ErrorPage.css";
import { Link } from 'react-router-dom';
import data from "./ErrorPageData";

const ErrorPage = (props) => {
    const [Data,setData]  = useState(data);
    console.log(props.pageType);

    
  return (
   <>
   <div id="error-page">
         <div class="content">
            <h2 class="header" data-text={props.pageType}>
               {props.pageType}
            </h2>
            <h4 data-text={props.Content}>
               {props.Content}
            </h4>
            <p>
               {props.description}
            </p>
            <div class="btns">
               <Link to="/">return home</Link>
            
            </div>
         </div>
      </div>
   </>
  );
}
export default ErrorPage;
import React from 'react';
import { NavLink } from 'react-router-dom';
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from '../../components/FormFields/Form';

export const Workspace = () => {
  return (
   <>
   <div className='container' style={{border:"2px solid rgb(220, 220, 220)",height:"100vh"}}>
        <h3 style={{margin:"auto",marginTop:"20px"}}>My Workspace</h3>
       <NavLink to="/formpage"> <button type='button' style={{borderRadius:"5px" ,border:"none", backgroundColor:"#66CDAA",padding:"5px",marginTop:"20px" }}>Create new form</button></NavLink>
        <hr style={{color:"#c2c9d1",height:"3px"}}/>
        <div className='container'>
        <div class="row">
  <div class="col-sm-3">
    <div class="card" style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",marginBottom:"10px"}}>
      <div class="card-body">
        <h5 class="card-title">form title here</h5>
        <p class="card-text">Number of responses</p>
        <NavLink to="/viewfrom" class="" style={{color:"black",textDecoration:"none",border:"2px solid #66CDAA",padding:"5px",borderRadius:"5px",float:"right"}}>View Form</NavLink>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card" style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",marginBottom:"10px"}}>
      <div class="card-body">
        <h5 class="card-title">form title here</h5>
        <p class="card-text">Number of responses</p>
        <NavLink to="/viewfrom" class="" style={{color:"black",textDecoration:"none",border:"2px solid #66CDAA",padding:"5px",borderRadius:"5px",float:"right"}}>View Form</NavLink>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card" style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",marginBottom:"10px"}}>
      <div class="card-body">
        <h5 class="card-title">form title here</h5>
        <p class="card-text">Number of responses</p>
        <NavLink to="/viewfrom" class="" style={{color:"black",textDecoration:"none",border:"2px solid #66CDAA",padding:"5px",borderRadius:"5px",float:"right"}}>View Form</NavLink>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card" style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",marginBottom:"10px"}}>
      <div class="card-body">
        <h5 class="card-title">form title here</h5>
        <p class="card-text">Number of responses</p>
        <NavLink to="/viewfrom" class="" style={{color:"black",textDecoration:"none",border:"2px solid #66CDAA",padding:"5px",borderRadius:"5px",float:"right"}}>View Form</NavLink>
      </div>
    </div>
  </div>
</div>
        </div>
   </div>
   </>
  );
}
export default Workspace;
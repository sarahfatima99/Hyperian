import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {  useNavigate,useLocation } from 'react-router-dom';
const ViewForm = () => {

  const location=useLocation()
  const details=location.state.item
  

  return (
      <>
      <Navbar data={details}/>
      </>
  )
}
export default ViewForm;

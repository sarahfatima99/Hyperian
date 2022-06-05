import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import UserShareForm from '../FormFields/UserShareForm'
const Navbar = (props) => {


  const formDetails = props.data
  console.log("in navbar", formDetails)
  return (
    <>

      <nav class="menu-navigation-dark">
        <NavLink to={"/formpage"}
          state={{ item: formDetails }} class="selected"><i class="fa fa-plus"></i><span>Create</span></NavLink>
        <NavLink to="/response"><i class="fa fa-reply-all"></i><span>Response</span></NavLink>
        <NavLink to={"/usershareform" }
        state={{formDetails:formDetails}}><i class="fa fa-share"></i><span>Share</span></NavLink>

      </nav>
    </>
  );
}
export default Navbar;

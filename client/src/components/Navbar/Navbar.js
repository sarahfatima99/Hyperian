import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <nav class="menu-navigation-dark">
    <NavLink to="/formpage" class="selected"><i class="fa fa-plus"></i><span>Create</span></NavLink>
    <NavLink to="/response"><i class="fa fa-reply-all"></i><span>Response</span></NavLink>
    <NavLink to="#" ><i class="fa fa-share"></i><span>Share</span></NavLink>
    
</nav>
    </>
  );
}
export default Navbar;

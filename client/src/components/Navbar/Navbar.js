import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = (props) => {


  const dummyData = {
    formId: 1002,
    name: 'form1',
    description: 'hello world',
    question: [{
      qid: 213,
      questionNumber: 1,
      questionDetail: 'hello world',
      questionType: "Single Line text",
      questionText: 'ksdalks'
    },
    {
      qid: 214,
      questionNumber: 2,
      questionDetail: 'hello world',
      questionType: "Multiple Choice",
      questionText: 'ksdalks',
      options:['1','2','3','4']
    },
    {
      qid: 214,
      questionNumber: 3,
      questionDetail: 'hello world',
      questionType: "Multi Line text",
      questionText: 'ksdalks'
    },
    {
      qid: 215,
      questionNumber: 4,
      questionDetail: 'hello world',
      questionType: "Single Line text",
      questionText: 'ksdalks'
    }

    ]
  }

  const formDetails = props.data
  console.log("in navbar", formDetails)
  return (
    <>

      <nav class="menu-navigation-dark">
        <NavLink to={"/formpage"}
          state={{ item: dummyData }} class="selected"><i class="fa fa-plus"></i><span>Create</span></NavLink>
        <NavLink to="/response"><i class="fa fa-reply-all"></i><span>Response</span></NavLink>
        <NavLink to="#" ><i class="fa fa-share"></i><span>Share</span></NavLink>

      </nav>
    </>
  );
}
export default Navbar;

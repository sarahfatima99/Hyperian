import React, { useState,useEffect, useRef } from "react";
import styled from "styled-components";
import  LoginForm  from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import  SignupForm from "./signupForm";
import axios from "axios";
import {MdClose} from "react-icons/md";
import {useSpring,animated } from "react-spring";
import ReactModal from "react-modal";
import background from "./bngg.jpg";
const Background = styled.div`
width: 100vw;
height:100vh;
background:rgba(0,0,0,0.8);
// position:fixed;
display:flex;
// justify-content:center;
align-items:center;
z-index:100;
margin: 0% !important;
padding: 0% !important;`


const BoxContainer = styled.div`
  width: 700px;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  text-align:center;
  margin-left:700px;

`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 500px;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 60%;
  transform: rotate(60deg);
  top: -620px;
  // right: 500px;
  left: -250px;
background: rgb(2,0,36);
background: #48D1CC;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`
const CloseModalButton = styled(MdClose)`
cursor: pointer;
position: absolute;
top:20px;
right:20px;
width:32px;
height:32px;
padding:0;
z-index:100;
`
const Backgroundimg=styled.div`
height:100vh;

width:50%;
background-image:url(${background});
background-size:100% 100%;
`
const backdropVariants = {
  expanded: {
    width: "200%",
    height: "1200px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "700px",
    borderRadius: "90%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};


export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <Backgroundimg>
     
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
       </Backgroundimg>
    </AccountContext.Provider>
  );
}
export default AccountBox;
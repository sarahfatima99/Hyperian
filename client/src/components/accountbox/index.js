import React, { useState,useEffect, useRef } from "react";
import styled from "styled-components";
import  LoginForm  from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import  SignupForm from "./signupForm";
import axios from "axios";
import {MdClose} from "react-icons/md";
import {useSpring,animated } from "react-spring";

const Background = styled.div`
width: 100vw;
height:100vh;
background:rgba(0,0,0,0.8);
position:fixed;
display:flex;
justify-content:center;
align-items:center;
z-index:100;
margin: 0% !important;
padding: 0% !important;`


const BoxContainer = styled.div`
  width: 320px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  text-align:center;
  margin-left:500px;
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
  width: 166%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -300px;
  left: -120px;
// background: rgb(2,0,36);
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

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};


const AccountBox = ({showModal, setshowModal}) => {
const modalRef = useRef();


  useEffect(() => {
    axios.get('http://localhost:9000/signup').then((res) => {
       
    })
  });

  const animation = useSpring({
    config: {
        duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
});
  
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
    <>
    {showModal ? (
     <AccountContext.Provider value={contextValue}>
      <Background>
      <animated.div style={animation}>
      <BoxContainer >

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
              <HeaderText>HYPERIAN</HeaderText>
              <HeaderText>Create Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>

          <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>

      <CloseModalButton aria-label='Close Modal' onClick={() =>{ setshowModal(prev => !prev)}}/>
      </BoxContainer>
      </animated.div>
      </Background>
      </AccountContext.Provider>

    ): null }
    
      
        
      
     
    
    </>  );
      }
export default AccountBox;
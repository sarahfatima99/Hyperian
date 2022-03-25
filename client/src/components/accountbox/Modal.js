import React from 'react'
import styled from "styled-components";
import {MdClose} from "react-icons/md";

const Modal = ({showModal, setshowModal}) => {


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
padding: 0% !important;
`

const BoxContainer = styled.div`
width: 320px;
min-height: 550px;
display: grid;
gird-template-columns: 1fr 1fr;
flex-direction: column;
background-color: #fff;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
position: relative;
border-radius: 10px;
z-index: 100;
overflow: hidden;
text-align:center;
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
  return (
   <>
   {showModal ? 
   (
        <Background>
            <BoxContainer showModal={showModal}>
                
            <CloseModalButton aria-label='Close Modal' onClick={() =>{ setshowModal(prev => !prev)}}/>
            </BoxContainer>
        </Background>
   ) 
   : null}
   </>
  )
}

export default Modal;
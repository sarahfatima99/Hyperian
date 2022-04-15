import React from 'react';
import {MdClose} from "react-icons/md";
import { NavLink } from 'react-router-dom';
import {useSpring,animated } from "react-spring";
import styled from "styled-components";



const Background = styled.div`
width: 100%;
height:100%;
background:rgba(0,0,0,0.8);
position:fixed;
display:flex;
justify-content:center;
align-items:center;
z-index:200;
`

const ModalWrapper = styled.div`
width:450px;
height:400px;
box-shadow: 0 5px 16px rgba(0,0,0,0.2);
background: #ffff;
color: #000;
padding: 2rem;
z-index:200;
border-radius:none;
`

const CloseModalButton = styled(MdClose)`
cursor: pointer;
position:absolute;
top:20px;
right:20px;
width:32px;
padding:0;
z-index:200;
`

const FormModal = ({showCreateModal,setShowCreateModal}) =>{

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showCreateModal ? 1 : 0,
        transform: showCreateModal ? `translateY(0%)` : `translateY(-100%)`
    });

  return (
    <>
    {showCreateModal ? (
        <Background>
            <animated.div style={animation}>
        <ModalWrapper showCreateModal={showCreateModal}>
            <div className='container mt-5'>
                <div className='row'>
                    <h5>Add Title</h5>
                    <br/>
            
                    <input className='title-input'/>
                    <h5 style={{marginTop:"2px"}}>Add Description <p style={{fontSize:"12px" , color:"gray"}}>(optional)</p></h5>
                  <br/>
                    <input className='title-input'></input>
                    <div className='container mt-4 text-align-center'>
                    <NavLink to="/formpage"><button  style={{backgroundColor:"#39cc83",color:"black",border:"none",borderRadius:"5px",width:"auto",padding:"8px"}}>Create</button></NavLink>
                    </div>
                </div>
            </div>
        <CloseModalButton aria-label='Close Modal' onClick={() =>{ setShowCreateModal(prev => !prev)}}/>
        </ModalWrapper>
        </animated.div>
    </Background>

    ) : null}
    
    </>
  );
}

export default FormModal;

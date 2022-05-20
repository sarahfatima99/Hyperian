import React from 'react';
import {MdClose} from "react-icons/md";
import { NavLink } from 'react-router-dom';
import {useSpring,animated } from "react-spring";
import styled from "styled-components";


const Background = styled.div`
width: 120%;
height:120%;
background:rgba(0,0,0,0.8);
position:fixed;
display:flex;
left:-150px;
top:-150px;
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

const FormModal = ({showModal,setShowModal}) =>{

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

  return (
    <>
    {showModal ? (
        <Background>
            <animated.div style={animation}>
        <ModalWrapper showModal={showModal}>
            <div className='container mt-5'>
                <div className='row d-flex flex-row'>
                    <div className='col-lg-6'>
                        <h5>Add Title</h5>
                    </div>
                    <div className='col-lg-6'>
                        <h5 style={{marginTop:"0px"}}>Add Description <p style={{fontSize:"12px" , color:"gray"}}>(optional)</p></h5>
                    </div>
                    {/* <input className='title-input'/>
                    
                     */}
                </div>
                <div className='container'>
                    <div className='row d-flex flex-row'>
                        <div style={{paddingLeft:"0px"}} className='col-lg-6'>
                            <input style={{paddingLeft:"0px",borderBottom:"2px solid #39cc83 "}} className='title-input'/>
                        </div>
                        <div className='col-lg-6'>
                            <input style={{borderBottom:"2px solid #39cc83 "}} className='title-input'></input>
                        </div>
                    </div>
                </div>
                <div className='container mt-4 text-align-center'>
                    <NavLink to="/createform"><button  style={{backgroundColor:"#39cc83",color:"black",border:"none",borderRadius:"5px",width:"auto",padding:"8px"}}>Create</button></NavLink>
                    </div>
            </div>
        <CloseModalButton aria-label='Close Modal' onClick={() =>{ setShowModal(prev => !prev)}}/>
        </ModalWrapper>
        </animated.div>
    </Background>

    ) : null}
    
    </>
  );
}

export default FormModal;

import React, {useState} from 'react';
import {MdClose} from "react-icons/md";
import { NavLink } from 'react-router-dom';
import {useSpring,animated } from "react-spring";
import styled from "styled-components";
import axios, { Axios } from "axios";
import {  useNavigate } from 'react-router-dom';


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
    const navigate = useNavigate();
    const [formDetails, setFormDetails]=useState({
        title:"",
        details:""
    })
    
    const handleChange = e => {
      
        console.log(formDetails)
        const {
          name,
          value   
        } = e.target
    
      
        setFormDetails({
            ...formDetails,
            [name]:value
        })
      }

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const submitForm =()=>{

        const userId=localStorage.getItem('userinfo')
        const formPayload={
            userId,
            formDetails

        }
            console.log(formPayload)
            axios.post("http://localhost:9000/form", formPayload)
            .then((res)=>{
                if (res.data.success==1){
                    localStorage.setItem("formInfo",res.data.form_id)
                    navigate('/formpage')
                }
                else{
                    console.log(res.data.message)
                }

            })

    }

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
      
                </div>
                <div className='container'>
                    <div className='row d-flex flex-row'>
                        <div style={{paddingLeft:"0px"}} className='col-lg-6'>
                            <input style={{paddingLeft:"0px",borderBottom:"2px solid #39cc83 "}} value={formDetails.title} name="title" onChange={handleChange}  className='title-input'/>
                        </div>
                        <div className='col-lg-6'>
                            <input style={{borderBottom:"2px solid #39cc83 "}} name="details" value={formDetails.details} onChange={handleChange} className='title-input'></input>
                        </div>
                    </div>
                </div>
                <div className='container mt-4 text-align-center'>
                  <button  style={{backgroundColor:"#39cc83",color:"black",border:"none",borderRadius:"5px",width:"auto",padding:"8px"}} onClick={submitForm} >Create</button>
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

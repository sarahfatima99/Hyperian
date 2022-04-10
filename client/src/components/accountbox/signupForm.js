import React, { useContext, useState } from "react";
import axios from 'axios'
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Or,
  Socialmedia,
  Googlelogin,
  login_a_tag,
  Google_banner,
  Span_text, Facebook_banner,
} from "./common";
import {  useNavigate } from 'react-router-dom';
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";


const  SignupForm=()=> {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })

  const { switchToSignin } = useContext(AccountContext);

  const handleChange = e => {
    console.log(e.target);
    const {
      name,
      value
    } = e.target

    setUser({
      ...user,
      [name]:value
    })



    }

    const Register=()=>{
      
      const{name,email,password,reEnterPassword}=user
      
      if(name && email && password && (password==reEnterPassword)){
        axios.post("http://localhost:9000/register",user)
       .then(res => {
         if(res.data.id){
           console.log(res.data.id)
         }
       })
       navigate('/')
      }
      else{
        alert("invalid input")
      }

  }

  return (
    
    <BoxContainer>
      <FormContainer>
        <Input type="text" name="name" value={user.name} placeholder="Full Name" onChange={handleChange} />
        <Input type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} />
        <Input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
        <Input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Password" onChange={handleChange} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={Register}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

export default SignupForm
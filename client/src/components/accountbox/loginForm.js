import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
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
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios, { Axios } from "axios";
import addPayload from './../../actions/index'

const LoginForm = () => {
  var data=false
  const navigate = useNavigate();
  const [loginStatus, setLogininStatus] = useState(false)
  const Dispatch = useDispatch()
  const { switchToSignup } = useContext(AccountContext);
  const [user, setUser] = useState({

    email: "",
    password: "",

  })

  const handleChange = e => {
 
    const {
      name,
      value
    } = e.target

    setUser({
      ...user,
      [name]: value
    })
  }
  
  // const userAuthenticated = () => {
  //   axios.get("http://localhost:9000/login/isUserAuth", {
  //     headers: {
  //       "x-access-token": localStorage.getItem("token")
  //     },
  //   })
  //     .then((response) =>
  //       navigate('/workspace')
  //     )
  // }

  const login = () => {
    axios.post("http://localhost:9000/login", user)
      .then((res) => {
        if (!res.data.auth) {
          setLogininStatus(false)
        }
        else {
          saveData(res)
        }
      })
  }

  const saveData = (res) => {
    localStorage.setItem("token", res.data.token)
    localStorage.setItem("userinfo", res.data.result)
    setLogininStatus(true)
    getPayload(res.data.result)
  }


  const getPayload = (userId) => {

    axios.get('http://localhost:9000/getData', {
      params: {
        userId: userId
      }
    })
      .then((res) => {
      

        const payloadData = res.data
        if (payloadData!=null){
          data=true
        }
        Dispatch(addPayload(payloadData))
        navigate('/workspace',{state:{data:data}})
      })
  }





  return (

    <BoxContainer>
      <FormContainer>
        <Input type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} />
        <Input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={login}>Signin</SubmitButton>
      {/* {loginStatus && <button onClick={userAuthenticated}> check if auth</button>} */}
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>

    </BoxContainer>
  );
}

export default LoginForm
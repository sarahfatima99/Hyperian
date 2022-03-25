import React, { useContext, useState } from "react";
import {  useNavigate } from 'react-router-dom';
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


const LoginForm = () => {
  const { switchToSignup } = useContext(AccountContext);

  const [user, setUser] = useState({

    email: "",
    password: "",

  })


  const navigate = useNavigate();
  const [loginStatus,setLogininStatus]=useState(false)


  const handleChange = e => {
    console.log(e.target);
    const {
      name,
      value
    } = e.target

    setUser({
      ...user,
      [name]: value
    })
  }
  const userAuthenticated=()=>{
    

    axios.get("http://localhost:9000/login/isUserAuth",{headers:{
      "x-access-token":localStorage.getItem("token")
      

    },
  }

  )
    .then((response)=>
    console.log(response)
    )

    navigate('/')
  }

  const login = () => {
    axios.post("http://localhost:9000/login", user)
    .then((res)=>{
      if(!res.data.auth){
        setLogininStatus(false)
      }
      else{
        console.log(res.data)
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("userinfo",res.data.result)
       
        setLogininStatus(true)
        userAuthenticated()
        // get_payload()
      }
    })
  }

  const get_payload=()=>{
    const user_id=localStorage.getItem("userinfo")
    console.log("user id :",user_id)
    axios.get("http://localhost:9000/user_payload", {
      params: {
       user_id:user_id
      }
    })
    .then((res)=>{
      console.log(res.data)
      if(!res.data.form_id){
        console.log("no forms yet")
      }
      
      else{
        console.log(res.data.form_id)
        localStorage.setItem("forminfo",res.data.form_id)
      }

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
      <Or>---- OR ----</Or>
      <Socialmedia>
        <Googlelogin>
          <login_a_tag>
            <Google_banner></Google_banner>
            <Span_text>Sign in with Google</Span_text>
          </login_a_tag>
        </Googlelogin>
        <Googlelogin>
          <login_a_tag>
            <Facebook_banner></Facebook_banner>
            <Span_text>Sign in with Facebook</Span_text>
          </login_a_tag>
        </Googlelogin>
      </Socialmedia>
    </BoxContainer>
  );
}

export default LoginForm
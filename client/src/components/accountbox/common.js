import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgba(2,0,36,1);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(2,0,36,0.19)
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(14,108,121,0.984352773826458) 21%, rgba(0,212,255,1) 100%);
  &:hover {
    filter: brightness(1.03);
  }
`;

export const Orlines=styled.div`
@media screen and (max-width: 1050px)
border-top: 1px solid rgba(208, 209, 210, 0.5);
margin: 3px 0 0;
position: relative;
width: 10%;
vertical-align: middle;
display:flex
`;

export const Or=styled.div`
display: flex;
font-family: Proxima N W01 Reg;
font-size: 11px;
padding: 0 2px;
margin: 0px 0px 0;
margin-top: 7px;
color: rgba(3, 3, 3, 0.5)
`;

export const Socialmedia=styled.div`
  text-align:center;
  margin-top;12px;
`;
export const Googlelogin=styled.button`
border-radius: 3px;
// border: solid 1px #bbb;
text-align: center;
box-sizing: border-box;
transition: all .25s ease;
width: 100%;
margin: 0 auto 10px;
margin-top:5px;
// padding:10px 10px
background-color: #ffffff;
overflow: hidden
`;
export const login_a_tag=styled.a`
display:inline-block;
padding:10px 10px 10px 10px;
width:100%;
`;

export const Google_banner=styled.span`
background:url(https://www.sogosurvey.com/AllImages/Images/sogo/sogo-login-google.svg);
background-size: contain;
background-position: center;
height: 18px;
width: 18px;
vertical-align: middle;
display: inline-block;
margin: 0 6px 0 0;
color:#757575;
`;
export const Span_text=styled.span`
font-size: 16px;
    display: inline-block;
    line-height: 16px;
    font-family: Proxima N W01 Smbd;
    letter-spacing: 0.3px;
    vertical-align: middle;
    color:#757575;
`;

export const Facebook_banner=styled.span`
background:url(https://www.sogosurvey.com/AllImages/Images/sogo/facebook-logo-new.svg);
background-size: contain;
background-position: center;
height: 18px;
width: 18px;
vertical-align: middle;
display: inline-block;
margin: 0 6px 0 0;
color:#757575
`;

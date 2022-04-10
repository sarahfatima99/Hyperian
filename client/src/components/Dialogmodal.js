import styled from "styled-components";
import React, { Component } from 'react'
import { fontWeight } from "@mui/material/node_modules/@mui/system";


const Modaldiv = styled.div`
overflow: hidden auto;
max-height: 100%;
height: 100%;
box-sizing: border-box;
width: 100%;
padding: 24px;
background-color: rgb(250, 250, 250);
`
const MQdiv = styled.div`
background-color: rgb(255, 255, 255);
color: rgb(38, 38, 39);
box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px;
position: relative;
padding: 24px 0px;
border-radius: 4px;


`
const MQtext=styled.div`
padding: 0px 24px 12px;
margin: 0px;
`
const Qnospan=styled.span`
font-size: 16px;
line-height: 24px;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
font-weight: 700;
margin-right: 8px;`
const Qtext=styled.span`
// display: block;
color: rgb(115, 115, 115);
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`
const Conditionbox=styled.div`
display: flex;
align-items: flex-start;
padding: 12px 66px 12px 24px;
max-width: 100%;
`
const OptionDropdown=styled.div`
height: 32px;
display: flex;
max-width:unset;
-webkit-box-align: center;
align-items: center;
border-radius: 4px;
margin-left:10px;
padding-left: 10px;
padding-right: 28px;
-webkit-box-pack: justify;
justify-content: space-between;
border: 1px solid rgb(187, 187, 187);
`
export class Dialogmodal extends Component {
  render() {
    return (
      
          <Modaldiv>
              <MQdiv>
                  <MQtext>
                    <Qnospan>1.</Qnospan>
                    <Qtext>Your Question here. Recall information with@</Qtext>
                    
                  </MQtext>
                  <Conditionbox><span style={{fontWeight:'600', padding:'0 5px 0'}}> Always jumps </span> to  
                   <OptionDropdown>Select.. </OptionDropdown>
                  </Conditionbox>
                <MQtext><button style={{color:'green'}}>+ Add Rule</button></MQtext>
                  </MQdiv>

         </Modaldiv>
    )
  }
}

export default Dialogmodal
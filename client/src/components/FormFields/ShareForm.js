import React,{useState} from 'react';
import  Form from "./Form";
import "./Form.css";
import SingleLineText from './ShareFeildsTypes/SingleLineText';
import MultiLineText from "./ShareFeildsTypes/MultiLineText"
import EmailQues from './ShareFeildsTypes/EmailQues';

const ShareForm = ({data}) => {
    
    
  const [formQues, SetFormQues] = useState([]);


    const shareHandle = () =>{
      
      
      data['Pages'].map((item) => {
        
       
        if(item.elements[0]['name'] == 'Single Line text')
        {
          
          SetFormQues([...formQues,{field_jsx: <SingleLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>}]);
          
        }
        else if(item.elements[0]['name'] == 'Multi Line Text')
        {
          
          
          SetFormQues([...formQues,{field_jsx: <MultiLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/> }])
          
        }
        else if(item.elements[0]['name'] == "Email")
        {
          console.log("Email")
          
          SetFormQues([...formQues,"Emailll" ])
          
        }
        
      })
      
    }
    
  return (
    <>
    <button onClick={shareHandle}>Preview</button>
    {/* {formQues.map((item,key)=>{
      
     console.log(item)
      return(<>
      {item.field_jsx}
      </>)
    })} */}

    {data['Pages'].map((item) =>{
      console.log(item)
      if(item.elements[0]['name']=== "Single Line text")
      {
        return(<>
        <div>
        <SingleLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
        </div>
        </>)
        

      }
      else if(item.elements[0]['name']=== "Multi Line Text")
      {
        return(<>
        <div>
          <MultiLineText questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
          </div>
          </>)
        
      }
      else if(item.elements[0]['name']=== "Email")
      {
        return(<>
        <div>
          <EmailQues questionNumber={item.elements[0]['questionNumber']} ques={item.elements[0]['questiontitle']} description={item.elements[0]['questionDescription']}/>
          </div></>)
      }
    })}
   
    </>
  )
}
export default ShareForm;

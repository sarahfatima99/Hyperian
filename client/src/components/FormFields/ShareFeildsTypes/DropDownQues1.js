import React,{useState} from 'react'
import { Dropdown ,DropdownButton} from 'react-bootstrap';


export default function DropDown({questionNumber , ques,description, optionsList}) {
    
console.log(optionsList)
  return (
    <div>            
        <div className=''>
        <span className='ques_no' style={{padding:"20px",margin:"20px"}}>{questionNumber}.</span>
        <input type="text" className='input-ques' value={ques}/>
        <div className='d-flex flex-row align-item-center'>
                    <textarea style={{paddingTop:"0px" ,marginLeft:"95px",marginTop:"0px"}} type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />
                </div>
        <br/>
       {        
        
        //   optionList.map((item, key) => {
        //     return (
        //         <div>                                
        //           <input type="textarea"  className="multi-choice add-option"  />                               
        //         </div>
        //         )
        //         })
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Select
  </Dropdown.Toggle>

  <Dropdown.Menu>
      {optionsList.map((item,key)=>{
          return(<>
            <Dropdown.Item>{item.name}</Dropdown.Item>

          </>)

      })}
    

  </Dropdown.Menu>
</Dropdown>
        }
        
        <br/>
        
        </div>
    </div>
  )
}
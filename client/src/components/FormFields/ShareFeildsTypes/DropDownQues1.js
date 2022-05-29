import React,{useState} from 'react'
import { Dropdown ,DropdownButton} from 'react-bootstrap';


export default function DropDown({questionNumber , ques,description, optionsList}) {
    
console.log(optionsList)
  return (
    <div>            
        <div className=''>
        <span className='ques_no'>{questionNumber}.</span>
        <input type="text" className='input-ques' value={ques}/>
        <textarea type="textarea" className='input-ques description' value={description} />
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
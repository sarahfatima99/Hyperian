import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import FormModal from './../../components/FormFields/FormModal'


export const Workspace = () => {





  const [showModal, setshowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(true);
  // const payload = useSelector(state => state.Payload.payload)
  // console.log(payload.form)
  const payload={form:[
    {
    formId: 1002,
    name: 'form1',
    description: 'hello world',
    question: [{
      qid: 213,
      questionNumber: 1,
      questionDetail: 'hello world',
      questionType: "Single Line text",
      questionText: 'ksdalks'
    },
    {
      qid: 214,
      questionNumber: 2,
      questionDetail: 'hello world',
      questionType: "Multiple Choice",
      questionText: 'ksdalks',
      options:['1','2','3','4']
    },
    {
      qid: 214,
      questionNumber: 3,
      questionDetail: 'hello world',
      questionType: "Multi Line text",
      questionText: 'ksdalks'
    },
    {
      qid: 215,
      questionNumber: 4,
      questionDetail: 'hello world',
      questionType: "Single Line text",
      questionText: 'ksdalks'
    }

    ]
  },
  {
    formId: 1002,
    name: 'form1',
    description: 'hello world',
    question: [{
      qid: 213,
      questionNumber: 1,
      questionDetail: 'hello world',
      questionType: "Single Line text",
      questionText: 'ksdalks'
    },
    {
      qid: 214,
      questionNumber: 2,
      questionDetail: 'hello world',
      questionType: "Multiple Choice",
      questionText: 'ksdalks',
      options:['1','2','3','4']
    },
    {
      qid: 214,
      questionNumber: 3,
      questionDetail: 'hello world',
      questionType: "Multi Line text",
      questionText: 'ksdalks'
    },
    {
      qid: 215,
      questionNumber: 4,
      questionDetail: 'hello world',
      questionType: "Single Line text",
      questionText: 'ksdalks'
    }

    ]
  },
  {
    formId: 1002,
    name: 'form1',
    description: 'hello world',
    question: [{
      qid: 213,
      questionNumber: 1,
      questionDetail: 'hello world',
      questionType: "Single Line text",
      questionText: 'ksdalks'
    },
    {
      qid: 214,
      questionNumber: 2,
      questionDetail: 'hello world',
      questionType: "Multiple Choice",
      questionText: 'ksdalks',
      options:['1','2','3','4']
    },
    {
      qid: 214,
      questionNumber: 3,
      questionDetail: 'hello world',
      questionType: "Multi Line text",
      questionText: 'ksdalks'
    },
    {
      qid: 215,
      questionNumber: 4,
      questionDetail: 'hello world',
      questionType: "Single Line text",
      questionText: 'ksdalks'
    }

    ]
  }]}




  const openModal = () => {
    
    setshowModal(prev => !prev);
  }

  return (
    <>
      <FormModal showModal={showModal} setShowModal={setshowModal} />
      <div className='container' style={{ border: "2px solid rgb(220, 220, 220)", height: "100vh" }}>
        <h3 style={{ margin: "auto", marginTop: "20px" }}>My Workspace</h3>
        <NavLink to=""> <button type='button' onClick={openModal} style={{ borderRadius: "5px", border: "none", backgroundColor: "#66CDAA", padding: "5px", marginTop: "20px" }}>Create new form</button></NavLink>
        <hr style={{ color: "#c2c9d1", height: "3px" }} />
        <div className='container'>
          <div class="row">

            {

              payload.form.map((item) => {
                console.log(item)
                return (
                  <div class="col-sm-3">
                    <div class="card" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", marginBottom: "10px" }}>
                      <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">Number of responses</p>
                        <NavLink to={"/viewfrom"}
                          state={{ item:item }}
                          class=""
                          style={{
                            color: "black"
                            , textDecoration: "none"
                            , border: "2px solid #66CDAA"
                            , padding: "5px"
                            , borderRadius: "5px"
                            , float: "right"
                          }}>View Form</NavLink>
                      </div>
                    </div>
                  </div>
                )
              })
            }


          </div>
        </div>
      </div>
    </>
  );
}
export default Workspace;
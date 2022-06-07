import React, { useState } from 'react'




const SingleLineText = ({ questionNumber, ques, description }) => {


    return (
        <div>
            <div className=''>
                <span className='ques_no' style={{ padding: "-100px", background: "transparent" }}>{questionNumber} </span>
                <input type="text" disabled className='input-ques' placeholder="Enter Question Text" value={ques} />

                <textarea style={{ paddingTop: "0px", marginLeft: "95px", marginTop: "0px" }} type="textarea" disabled className='input-ques description' placeholder="Enter Question Description (optional)" value={description} />

                <input type="textarea" className='ans-disabled' placeholder="Type your answer here" />

            </div>
        </div>
    )
}
export default SingleLineText;
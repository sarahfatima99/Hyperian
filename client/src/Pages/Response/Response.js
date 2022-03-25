import Navbar from 'components/Navbar/Navbar';
import React from 'react';
import polygon from "../../images/Polygon.png";
import { useState } from 'react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend,LineChart,Line, ResponsiveContainer,  } from 'recharts';

export const Response = () => {


    const data = [
        {
          name: 'para 1 ',
          Sad: 100,
          Happy: 80,
          Fear: 90,
          Anger: 30,
          Surprise: 22,
          amt: 2400,
        },
        {
          name: 'para 2 ',
          Sad: 40,
          Happy: 75,
          Fear: 12,
          Anger: 50,
          Surprise: 77,
          amt: 2210,
        },
        {
          name: 'para 3 ',
          Sad: 100,
          Happy: 40,
          Fear: 45,
          Anger: 98,
          Surprise: 55,
          amt: 2290,
        },
        {
          name: 'para 4 ',
          Sad: 27,
          Happy: 39,
          Fear: 19,
          Anger: 57,
          Surprise: 38,
          amt: 2000,
        },
        {
          name: 'para 5 ',
          Sad: 18,
          Happy: 48,
          Fear: 28,
          Anger: 78,
          Surprise: 77,
          amt: 2181,
        },
        
        {
          name: 'para 6 ',
          Sad: 34,
          Happy: 43,
          Fear: 75,
          Anger: 59,
          Surprise: 99,
          amt: 2100,
        },
      ];
    const [showOverall , setShowOverall] = useState(false);
    const [showBarChart , setShowBarChart] = useState(false);
    const [showLineChart ,setShowLineChart] = useState(false);

  return (
    <>
    <Navbar/>
    <div className='container mt-2'>
        <h3 style={{textAlign:"center"}}>Responses</h3>
        <hr style={{marginBottom:"0px"}}/>
        </div>
        <div className='container' style={{width:"100%",textAlign:"center"}}>
            <img  style={{display:"inline"}} src={polygon}/>
            <h5 style={{color:"black",marginTop:"3px"}}>Questions Responses</h5>
        </div>
        <div className='container' style={{textAlign:"center",border:"2px solid rgb(220, 220, 220)"}}>
        <h6 style={{marginTop:"8px"}}>Question1 : What is your name?</h6>
        <div className='container d-flex flex-row'>
            <button style={{border: "3px solid #48d1cc",borderRadius:"10px",margin:"8px",backgroundColor:"white",padding:"10px"}} onClick={() => {setShowOverall(true); setShowBarChart(false);setShowLineChart(false)}} >Overall</button>
            <button style={{border: "3px solid #48d1cc",borderRadius:"10px",margin:"8px",backgroundColor:"white",padding:"8px"}} onClick={() => {setShowBarChart(true); setShowLineChart(false); setShowOverall(false) }} >BarChart</button>
            <button style={{border: "3px solid #48d1cc",borderRadius:"10px",margin:"8px",backgroundColor:"white",padding:"8px"}} onClick={() => {setShowLineChart(true); setShowBarChart(false); setShowOverall(false); }}  >lineChart</button>
            </div>

        {showBarChart ? (
            <>
            <BarChart
      width={900}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 50,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis  dataKey="name"  interval={'preserveStartEnd'}/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Sad"   fill="rgba(18, 145, 150, 1)" />
      <Bar dataKey="Happy"   fill="rgba(225, 131, 105, 1)" />
      <Bar dataKey="Fear"  fill="rgba(119, 80, 218, 1)" />
      <Bar dataKey="Anger"   fill="rgba(147, 153, 7, 1)" />
      <Bar dataKey="Surprise"   fill="rgba(87, 96, 95, 0.81)" />
    </BarChart>
    
    
            </>

        ) : null}

        {showOverall ? (
          <>
          <div className='container' style={{border:"2px solid #48d1cc"}}>
            <h3>Overall Statistics</h3>
            <div className='container d-flex flex-row align-items-center justify-content-around'>
              <div>
              <h6>Views</h6>
              <p>10</p>
              </div>
              <div>
              <h6>start</h6>
              <p>10</p>
              </div>
              <div>
              <h6>submission</h6>
              <p>8</p>
              </div>
            </div>
          </div>
          </>
        ) : null}
        
</div>
    </>
  )
}
export default Response;
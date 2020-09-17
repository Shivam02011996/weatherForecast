import React from 'react';
import Interval from '../interval/Interval'
import './Hourly.css'

export default function Hourly(props){
  
 let allDataRows = props.fullWeatherForecasts.list;
 let topTwoRows = [];
  for(let i = 0; i < 2; i++){
    topTwoRows.push(allDataRows[i]);
  }



  return (
    <div className="hourly-card">
      <Interval 
      interval={topTwoRows[0]}
      heading="Now"
      />
      <Interval 
      interval={topTwoRows[1]}
      heading="After 3-hour"
      />     
      </div>
  );
}

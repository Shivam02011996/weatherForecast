import React from 'react';
import TodayTemperature from './TodayTemperature'
import './Today.css'
import AllEnvironmentProp from './../environment-panel/AllEnvironmentProp'

export default function Today(props){
  
  return (<div className="today-weather">
    <TodayTemperature fullWeatherReport={props.fullWeatherReport}/>
    

     <AllEnvironmentProp 
      interval={props.fullWeatherForecasts.list[0]}
      heading="Now"
      />    
    </div>);
}

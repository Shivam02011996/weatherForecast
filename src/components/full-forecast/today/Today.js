import React from 'react';
import Pollen from './Pollen'
import TodayTemperature from './TodayTemperature'

export default function Today(props){
  return (<div>
    <TodayTemperature fullWeatherReport={props.fullWeatherReport}/>
    <Pollen />
    </div>);
}

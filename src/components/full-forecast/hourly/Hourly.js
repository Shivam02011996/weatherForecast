import React from 'react';
import './Hourly.css'
import WeatherTable from './../five-day/WeatherTable'

export default function Hourly(props){
  
 let allDataRows = props.fullWeatherForecasts.list;

  let locatedCity = {
      locatedCity: props.fullWeatherForecasts.city
    }



  return (

    <div className="hourly-card">
        <WeatherTable 
          fullWeatherForecasts= {allDataRows}
          city={locatedCity}
          isFullDateShow={true}
          />

      
      </div>
  );
}

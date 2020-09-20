import React from 'react';
import './FiveDay.css'
import WeatherTable from './WeatherTable'

export default function TenDay(props){
    let allDataRows = props.fullWeatherForecasts.list;
    let locatedCity = {
      locatedCity: props.fullWeatherForecasts.city
    }
  allDataRows = allDataRows.reduce((previous,rows)=>{
        rows.dt_txt = rows.dt_txt.toLocaleString();
        previous[rows.dt_txt.split(" ")[0]] = rows;
        return previous;
  },{});
  allDataRows = Object.values(allDataRows);


  return (
      <div className="ten-day">
          <WeatherTable 
          fullWeatherForecasts= {allDataRows}
          city={locatedCity}
          isFullDateShow={false}
          />

      </div>
  );
}

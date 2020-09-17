import React from 'react';
import './TenDay.css'
import WeatherTable from './WeatherTable'

export default function TenDay(props){
    let allDataRows = props.fullWeatherForecasts.list;
  allDataRows = allDataRows.reduce((previous,rows)=>{
        previous[rows.dt_txt.split(" ")[0]] = rows;
        return previous;
  },{});
  allDataRows = Object.values(allDataRows);


  return (
      <div className="ten-day">
          <WeatherTable 
          fullWeatherForecasts= {allDataRows}
          />
      </div>
  );
}

import React from 'react';
import WeatherCard from './WeatherCard'
import './SingleCity.css'
  


export default function SingleCity(props){
      return (
    <div className="single-city">
      <WeatherCard allData={props.city} 
      onClickFullForecasts={props.onClickFullForecasts}
      id={props.id}
      />
      
</div>
  );  
  
}
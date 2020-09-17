import React from 'react'
import './WeatherCard.css'
import { Icon } from '@iconify/react';
import humidityIcon from '@iconify/icons-wi/humidity';



export default function WeatherCard(props){
  
  return (
    <div className="four-weather-card">
    <div className="weather-card"> 
      <div className="heading-section">
        <div  className="city-name">
          {props.allData.location.city},
          {" "+props.allData.location.country}
        </div>
      </div>

      <div className="container">
          <div className="weather-icon">
            <img
            style={{width:95,height:100}}
            src={props.allData.imgSrc}
            alt="sunlight"
            />
          </div>

          <div className="temperature-data">
            <div>{props.allData.temperature.main}<sup className="degree">&#8457;</sup></div>
  <div className="feels-like">feels like {props.allData.feelsLike}&deg;</div>
          </div>

      <div className="extra-data">
          <div className="high-low-temperature">
              <div className="high">
  {props.allData.temperature.high}&deg;
              </div>
                <div className="low">
  {props.allData.temperature.low}&deg;
                </div>
          </div>


            <div className="pop-container">
                <span><Icon icon={humidityIcon} /></span>
                <span>{props.allData.humidity}%</span>
                <span>/</span>    
            </div>
                <div className="bottom-pop">
                  <div>0.00</div>
                  <div>in</div>
              </div>
      </div>



        </div>
        <button className="button"
        onClick={props.onClickFullForecasts}
        id={props.id}
        >Full Forecast</button>

</div>
      </div>
  );
}


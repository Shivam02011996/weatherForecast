import React from 'react'
import './TodayTemperature.css'
import convertDegreeToDirection from './../../homepage/utils/DegreeToDirection'

export default function (props){

  return (<div className="today-temperature-card">
    <div className="time-heading">
         {new Date().toString()} | Updated just now
    </div>

    <div className="temperature-card">

      <div className="temperature-circle">
          <div className="circle">
            <div className="today-min-max">
              <div className="high-low-temperature">
                <div className="high">
                  {props.fullWeatherReport.temperature.high}
                                   
                </div>
                  <div className="low">
  {(props.fullWeatherReport.temperature.low)}&deg;
                </div>
          </div>


         </div>


          <div className="circle-temperature-data">
                <div className="main-temperature">{ props.fullWeatherReport.temperature.main}<div className="main-degree">&#8457;</div></div>
          </div>

          <div className="like">Like<span> {props.fullWeatherReport.feelsLike}&deg; </span></div>


          </div>
      </div>

          

          <div  className="cloud-wind-icon">
                <div className="today-cloud-icon-status">
                    <div className="today-cloud-icon">
                      <img
                        style={{width:75,height:75}}
                        src="https://www.wunderground.com/static/i/c/v4/28.svg"
                        alt="sunlight"
                      />

                      
                      </div>
                      <div className="today-status">
                        Mostly Cloudy
                        </div>
                </div>

                <div className="wind-circle">
                  <div className="wind-content">
          <div className="wind-direction">{convertDegreeToDirection(props.fullWeatherReport.wind.deg)}
</div>
<div className="wind-speed">{props.fullWeatherReport.wind.speed}</div>
                  </div>               
                </div>


            </div>
      </div>

  </div>)
}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Link, BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import Today from './today/Today'
import Hourly from './hourly/Hourly'
import FiveDay from './five-day/FiveDay'
import './FullForecast.css'

export default function FullForecast(props) {
  let allReport = props;
  console.log("call in props");
 console.log(props);
  return (
  <div>

    <div className="city-location">
      
      <div className="city-name">{props.fullWeatherForecasts.city.name},{props.fullWeatherForecasts.city.country}
      </div>
      
    </div>
  <Router >
  <div className="full-forecasts">
    
      <Link 
        className="report-button"
        to="/today"
      >Today
      </Link>


      <Link 
        className="report-button"
        to="/five-day">Five Day Forecast
      </Link>



        <Link 
          className="report-button"
          to="/three-hourly">Three hourly Forecasts
        </Link>

  </div>

  <Switch> 
     <Redirect exact from="/" to="/today" />


    <Route 
      path="/today"  
      render={()=>(<Today 
      fullWeatherReport={allReport.fullWeatherReport}
      fullWeatherForecasts={allReport.fullWeatherForecasts}
      />)}
       />

    <Route 
      path="/five-day" 
      render={()=>(<FiveDay 
      fullWeatherForecasts={allReport.fullWeatherForecasts}
      />)}
      
      />


    <Route path="/three-hourly" 
      render={()=>(<Hourly
      fullWeatherForecasts={allReport.fullWeatherForecasts}
      />)}
    />

</Switch>
</Router>

</div>  );
}

import React from 'react';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import Today from './today/Today'
import Hourly from './hourly/Hourly'
import TenDay from './10-day/TenDay'
import './FullForecast.css'

export default function FullForecast(props) {
  let allReport = props;
 
  return (
  <div>
  <Router >
  <Nav fill variant="tabs" defaultActiveKey="/" className="full-forecasts">

  <Nav.Item class="box">
    <Nav.Link eventKey="link-1" className="forecast-button"><Link to="/today">Today </Link></Nav.Link>
  </Nav.Item>


  <Nav.Item class="box">
    <Nav.Link eventKey="link-2" className="forecast-button"><Link to="/ten-day">5-day </Link></Nav.Link>
  </Nav.Item>

  <Nav.Item class="box">
    <Nav.Link eventKey="link-3" className="forecast-button"><Link to="/hourly">Hourly </Link></Nav.Link>
  </Nav.Item>



  </Nav>

  <Switch> 
     <Redirect exact from="/" to="/today" />


    <Route 
      path="/today"  
      render={()=>(<Today 
      fullWeatherReport={allReport.fullWeatherReport}
      />)}
       />

    <Route 
      path="/ten-day" 
      render={()=>(<TenDay 
      fullWeatherForecasts={allReport.fullWeatherForecasts}
      />)}
      
      />


    <Route path="/hourly" 
      render={()=>(<Hourly
      fullWeatherForecasts={allReport.fullWeatherForecasts}
      />)}
    />

</Switch>
</Router>

</div>  );
}

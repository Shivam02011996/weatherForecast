import React from 'react';
import SearchBox from './SearchBox';
import TopFourCities from '../top-4-cities/TopFourCities'
import SingleCity from './SingleCity'
import './MainComponent.css'
import FullForecast from '../../full-forecast/FullForecast';
import kelvinToFahrenheit from '../utils/KelvinToFahrenheit'

export default class MainComponent extends React.Component{
  constructor (props){
    super(props);
    this.state = {isInputAvailable: false,
      message : "",
      isFullForecasts: false,
      city : {}
    };
  }

  
  handleSubmit = (e)=>{
    let fetchData = "";
    let isFullForecasts ;
    if(e.target.type === 'submit'){
      const id = e.target.id;
      fetchData = fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=5b6de157d04a876488377fadfed4a910&cnt=40`);
      isFullForecasts = true;

          fetchData.then(response => response.json())
        .then((city1)=>{
          
          let city = city1.list[0];
          
              return {
                singleCity : {
                  id: city1.city.id,
                  location :{
                              city: city1.city.name,
                              country: city1.city.country 
                            },
                temperature: {
                                main: parseInt(kelvinToFahrenheit(city.main.temp)),
                                low: parseInt(kelvinToFahrenheit(city.main.temp_min)),
                                high: parseInt(kelvinToFahrenheit(city.main.temp_max))
                              },
                feelsLike :parseInt(kelvinToFahrenheit(city.main.feels_like)),
                imgSrc: "https://www.wunderground.com/static/i/c/v4/30.svg",
                humidity: city.main.humidity,
                wind: city.wind
                            },
                lists: city1,
                
                
              }
             }).then((allWeatherObject)=>{
                
                let city = allWeatherObject.singleCity;
                let allForecastsWeather = allWeatherObject.lists;
        
                this.setState({isInputAvailable : true,city: city ,
                  message : "",
                  isFullForecasts: isFullForecasts,
                  fullWeatherForecasts: allForecastsWeather
                });
             })
             .catch((error)=>{
        
                      this.setState({isInputAvailable : false, 
                      message : `please have a look on the city which you entered 
                      meantime you can see default cities`,
                      isFullForecasts : false
    
                      });
             });  
      


    }else{
        e.preventDefault();
      let city = e.target[0].value;
       fetchData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b6de157d04a876488377fadfed4a910`);
      isFullForecasts = false;
          fetchData.then(response => response.json())
        .then((city)=>{
                
              return {
                  id: city.id,
                  location :{
                              city: city.name,
                              country: city.sys.country 
                            },
                temperature: {
                                main: kelvinToFahrenheit(city.main.temp),
                                low: kelvinToFahrenheit(city.main.temp_min),
                                high: kelvinToFahrenheit(city.main.temp_max)
                              },
                feelsLike :kelvinToFahrenheit(city.main.feels_like),
                imgSrc: "https://www.wunderground.com/static/i/c/v4/30.svg",
                humidity: city.main.humidity,
                
              }
             }).then((city)=>{
                this.setState({isInputAvailable : true,city: city ,
                  message : "",
                  isFullForecasts: isFullForecasts
                });
             })
             .catch((error)=>{
                      this.setState({isInputAvailable : false, 
                      message : `please have a look on the city which you entered 
                      meantime you can see default cities`,
                      isFullForecasts : false
    
                      });
             });  
      
    }
    
        
          
  }

  render(){
      
    let showBriefWeather = (!this.state.isInputAvailable ? 
            <TopFourCities onClickFullForecasts={this.handleSubmit}
            /> 
            : <SingleCity city={this.state.city} 
              onClickFullForecasts={this.handleSubmit}
              id={this.state.city.id}
            />);

    let showFullForecasts = <div>
       <FullForecast 
       fullWeatherReport={this.state.city}
       fullWeatherForecasts={this.state.fullWeatherForecasts}
       >
       </FullForecast>
        
       </div> 

    return (<div>
      <SearchBox onSubmit={this.handleSubmit} error={this.state.message}/>
      <div className="error">{this.state.message}</div>

      {this.state.isFullForecasts ? showFullForecasts : showBriefWeather}
      
    </div>)
  }
}
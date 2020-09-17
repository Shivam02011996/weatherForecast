import React from 'react';
import WeatherCard from '../main-component/WeatherCard'
import kelvinToFahrenheit from '../utils/KelvinToFahrenheit'


  


export default class TopFourCities extends React.Component{
  constructor(props){
    super(props);
        let initialData = [{location :{
                            city: "bangalore",
                              country: "india" },
                temperature: {
                    main: 77,
                    low: 74,
                    high: 66
                },
                feelsLike :10,
                imgSrc: "https://www.wunderground.com/static/i/c/v4/30.svg"
          }]
          this.state= {fourCities:initialData,
            onClickFullForecasts: props.onClickFullForecasts};

  }

  componentDidMount(){
    let fourPopularCitiesWeatherReport = []
      try{
      fetch(`https://api.openweathermap.org/data/2.5/group?id=1275004,1277333,1264527,1273294&&appid=5b6de157d04a876488377fadfed4a910`)
          .then(response => response.json())
        .then(json => {
          fourPopularCitiesWeatherReport = 
            json.list.map((city)=>{
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
                humidity : city.main.humidity
              }
             });
          
              this.setState({fourCities : fourPopularCitiesWeatherReport});   
        })
    }catch(e){
      console.log(e);
    }
    
  }


      
  render(){


    let topFourCities = this.state.fourCities.map((city)=>{
        return (
          <WeatherCard 
          key={city.id} 
          allData={city}
          onClickFullForecasts={this.state.onClickFullForecasts}
          id={city.id}
          />
        )
    });

      return (
    <div className="weather-card-four">
      {topFourCities}
      
</div>
  );  
  }
  
}
import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weather: '',
      unit: 'imperial',
      lat: 0,
      lon: 0,
      temp: 0,
      city: ""
    };
    this.fetchWeatherInfo = this.fetchWeatherInfo.bind(this);
    this.tempUnits = {
      'imperial': 'Fahrenheit',
      'metric': 'Celsius',
    }
    // this.weatherapi = `api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}`;
  }

  fetchWeatherInfo(location){
    let coord = location.coords;
    this.setState({ lat: coord.latitude, lon: coord.longitude });
    let requestUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=${this.state.unit}&appid=88483962981171fe18887d4fdd77d5c5`;
    console.log(requestUrl);
    const request = new XMLHttpRequest();
    let that = this;
    request.addEventListener('load', function(){
      if(this.readyState === 4 && this.status === 200){
        console.log(this.responseText);
        let tempInfo = JSON.parse(this.responseText);
        console.log(tempInfo);
        that.setState({ temp: tempInfo.main.temp, city: tempInfo.name });
      }
    });
    request.open('GET', requestUrl, true);
    request.send();
    // $.ajax({
    //   url: `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&unit=${this.state.unit}`,
    //   dataType: JSON,
    //   method: 'GET',
    //   success: function(data){
    //     console.log(`Success, data: ${data}`);
    //   }
    // });
  }

  getWeatherAPIURL(){
    
  }

  componentDidMount(){
    //Request user location
    if (navigator.geolocation) {
      let currentPos = navigator.geolocation.getCurrentPosition(this.fetchWeatherInfo);
    }else{ //Failed to obtain location, use default geolocation instead

    }
  }
  
  render(){
    return (
      <section className="weather-widget-content">
        <h3>Temperature: {this.state.temp} {this.tempUnits[this.state.unit]}</h3>
        <h4>City: {this.state.city}</h4>
      </section>
    );
  }
}

export default Weather;
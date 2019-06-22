import React from 'react';

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weather: '',
    };
    this.fetchWeatherInfo = this.fetchWeatherInfo.bind(this);
  }

  fetchWeatherInfo(location){
    console.log(location);
  }

  componentDidMount(){
    //Request user location
    console.log("hi");
    if (navigator.geolocation) {
      let currentPos = navigator.geolocation.getCurrentPosition(this.fetchWeatherInfo);
    }else{ //Failed to obtain location, use default geolocation instead

    }
  }

  
  render(){
    return (
      <h3>This should be a weather widget</h3>
    );
  }


}


export default Weather;
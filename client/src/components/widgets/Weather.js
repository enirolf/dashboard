import React, { Component } from 'react';
import { round } from 'mathjs'
import '../../css/Weather.css'
import '../../css/weather-icons.css'
import '../../css/weather-icons-wind.css'

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
            temp: undefined,
            wind_speed: undefined,
            wind_deg: undefined,
            id: undefined
    };
  }

  callAPI() {
    fetch(`http://192.168.2.33:9000/getWeather?lat=${this.props.lat}&lon=${this.props.lon}`)
      .then(res => res.json())
      .then(res => this.setState({
        temp: round(res.temp),
        wind_speed: windToBeaufort(res.wind_speed),
        wind_deg: res.wind_deg,
        id: res.id
      }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="Weather">
        <div className="left">
          <i className={"wi " + getIcon(this.state.id)}></i>
          {/* <p>{this.state.id}</p> */}
          <p>{this.state.temp} °C</p>
        </div>
        <div className="right">
          <i className={"wi wi-wind from-" + this.state.wind_deg + "-deg"}></i>
          <p>{this.state.wind_speed} Bft.</p>
        </div>
      </div>
    );
  }
}

export default Weather;

/* Convert wind from m/s to beaufort. */
function windToBeaufort(wind) {
  if (wind >= 32.7) {
    return 12;
  } else if (wind >= 28.5) {
    return 11;
  } else if (wind >= 24.5) {
    return 10;
  } else if (wind >= 20.8) {
    return 9;
  } else if (wind >= 17.2) {
    return 8;
  } else if (wind >= 13.9) {
    return 7;
  } else if (wind >= 10.8) {
    return 6;
  } else if (wind >= 8.0) {
    return 5;
  } else if (wind >= 5.5) {
    return 4;
  } else if (wind >= 3.4) {
    return 3;
  } else if (wind >= 1.6) {
    return 2;
  } else if (wind >= 0.3) {
    return 1;
  }

  return 0;
}

function getIcon(id) {
  if (id < 300) {
    return "wi-thunderstorm";
  } else if (id < 600) {
    return "wi-rain-mix";
  } else if (id < 700) {
    return "wi-snow";
  } else if (id < 800) {
    return "wi-fog";
  } else if (id === 800) {
    return "wi-day-sunny";
  } else if (id === 801) {
    return "wi-day-cloudy";
  } else if (id === 802) {
    return "wi-cloud";
  } else if (id === 803 || id === 804) {
    return "wi-cloudy";
  }

  return "wi-alien";
}

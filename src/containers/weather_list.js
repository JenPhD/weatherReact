import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{
  renderWeather(cityData) {
    const name = cityData.city.name;
    const tempsK = cityData.list.map(weather => weather.main.temp);
    //convert temperatures from K to F
    const tempsF = tempsK.map((temp => {
      return (temp * 9/5 - 459.67);
    }));
    //console.log(temps);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={tempsF} color="red" units="F"/></td>
        <td><Chart data={pressures} color="purple" units="hPa" /></td>
        <td><Chart data={humidities} color="green" units="%"/></td>
      </tr>
    );
  }

  render (){
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (F)</th>
          <th>Pressure (hPa) </th>
          <th>Humidity (%) </th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

//ES6 for what could be written as
//const weather = state.weather;
function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
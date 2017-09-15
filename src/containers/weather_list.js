import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp),(temp) => temp*9/5 - 459.67);
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidity = cityData.list.map(weather => weather.main.humidity)
  

    return (
      <tr key={name}>
        <td>
          {name}
        </td>
        <td><Chart data={temps} color="orange" units="F"/></td>
        <td><Chart data={pressure} color="blue" units="hPa"/></td>
        <td><Chart data={humidity} color="green" units="%"/></td>

      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return { weather }; // === { weather: weather}
}
export default connect(mapStateToProps)(WeatherList);
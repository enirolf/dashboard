import React, { Component } from 'react';
import '../css/Dashboard.css';
import '../css/index.css'
import Widget from './Widget';
import Weather from './widgets/Weather'

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Widget name="Hinderdam">
          <Weather lat="52.282320" lon="5.059180"></Weather>
        </Widget>
        <Widget name="Science Park">
          <Weather lat="52.356496" lon="4.952130"></Weather>
        </Widget>
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from 'react';
import Dashboard from 'react-dazzle';

import HelloWorld from './widgets/HelloWorld';

import 'react-dazzle/lib/style/style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      widgets: {
        HelloWorldWidget: {
          type: HelloWorld,
          title: 'Hello World',
          props: {
            text: 'Yee Haw',
          }
        }
      },

      layout: {
        rows: [{
          columns: [{
            className: 'col-md-8',
            widgets: [{key: 'HelloWorldWidget'}],
          }],
        }],
      }
    };
  }

  render() {
    return <Dashboard widgets={this.state.widgets} layout={this.state.layout}/>
  }
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       temp: undefined,
//       wind_speed: undefined,
//       wind_deg: undefined,
//       id: undefined
//     };
//   }

//   callAPI() {
//     fetch("http://localhost:9000/getWeather?lat=52.356496&lon=4.952130")
//       .then(res => res.json())
//       .then(res => this.setState({
//         temp: res.temp,
//         wind_speed: res.wind_speed,
//         wind_deg: res.wind_deg,
//         id: res.id
//       }));
//   }

//   componentWillMount() {
//     this.callAPI();
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>Temp: {this.state.temp}</p>
//           <p>Wind speed: {this.state.wind_speed}</p>
//           <p>Wind angle: {this.state.wind_deg}</p>
//           <p>Weather id: {this.state.id}</p>
//         </header>
//       </div>
//     );
//   }
// }

export default App;

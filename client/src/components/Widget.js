import React, { Component } from 'react';
import '../css/Widget.css';

class Widget extends Component {
  render() {
    return (
      <div className={'Widget Widget-' + this.props.name}>
        <div className="title">
          {this.props.name}
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Widget;

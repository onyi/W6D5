import React from 'react';
import Clock from './clock';

class Widget extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Widget</h1>
        <Clock />
      </div>
    )
  }
}

export default Widget;
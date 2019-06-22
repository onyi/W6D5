import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';


class Widget extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const panes = [
      {
        title: 'Tab 1',
        content: 'first'
      },
      {
        title: 'Tab2',
        content: 'second'
      },
      {
        title: 'Tab3',
        content: '3'
      }
    ];
    return (
      <div className="widget">
        <h1>Widget</h1>
        <Clock />

        <div className="widget-row">
          <div className="widget-content">
            <h1>Tabs</h1>
            <Tabs panes = {panes}/>
          </div>

          <div className="widget-content weather-widget">
            <h1>Weather</h1>
            <Weather/>
          </div>

          {/* <div className="widget-content">
            <h1>Autocomplete Widget</h1>
            <Tabs contentlists={contentlists} />
          </div> */}
        </div>
      </div>
    )
  }
}

export default Widget;
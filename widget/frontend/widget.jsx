import React from 'react';
import Clock from './clock';
import Tabs from './tabs';


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

        <h1>Tabs</h1>
        <Tabs panes = {panes}/>
      </div>
    )
  }
}

export default Widget;
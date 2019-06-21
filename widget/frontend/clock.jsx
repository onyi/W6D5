import React from 'react';

class Clock extends React.Component {

  constructor(props){
    super(props);
    // const time = new Date();
    // console.log(time.getSeconds());
    this.state = {
      // hour: time.getHours(),
      // minute: time.getMinutes(),
      // second: time.getSeconds(),
      time: new Date()
    },
    // console.log(`${this.hour} ${this.minute} ${this.second}`);
    this.tick = this.tick.bind(this);
    setInterval(this.tick, 1000);
  }

  tick(){
    // const { hour, minute, second, time } = this.state;

    let h = this.state.time.getHours();
    let m = this.state.time.getMinutes();
    let s = this.state.time.getSeconds();
    // console.log(`${this.hour} ${this.minute} ${this.second}`);
    // let h = this.hour;
    // let m = this.minute;
    // let s = this.second;
    s += 1
    console.log(`Second: ${s}`);
    if(s > 59){
      m += 1;
      s = 0;
    }
    if(m > 59){
      h += 1;
      m = 0;
    }
    if(h > 23){
      h = 0;
    }
    this.state.time.setHours(h);
    this.state.time.setMinutes(m);
    this.state.time.setSeconds(s);
    // console.log(`${this.hour} ${this.minute} ${this.second}`);
    this.setState({ time: this.state.time });
  }

  render(){
    const { hour, minute, second, time } = this.state;

    let m = time.getMinutes();
    if (m < 10) m = '0' + m;
    let s = time.getSeconds();
    if (s < 10) s = '0' + s;
    let h = time.getHours();
    if (h < 10) h = '0' + h;
    
    return (
      <div className="clock-widget">
        <h3>This is a clock</h3>
        <h4>{h}:{m}:{s}</h4>
      </div>
    );
  }



}

export default Clock;
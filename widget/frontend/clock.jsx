import React from 'react';

class Clock extends React.Component {

  constructor(props){
    super(props);
    this.state = {

      time: new Date()
    },
    this.tick = this.tick.bind(this);
    
  }

  tick(){

    let h = this.state.time.getHours();
    let m = this.state.time.getMinutes();
    let s = this.state.time.getSeconds();

    s += 1
    // console.log(`Second: ${s}`);
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
        <h2 className="clock-title">Clock</h2>
        <div className="clock-values">
          <h3>Time: {h}:{m}:{s}</h3>
          <h3>Date: {time.toDateString()}</h3>
        </div>
      </div>
    );
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

}

export default Clock;
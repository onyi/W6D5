import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      panes: props.panes
    };
  }

  selectTab(title) {
    const panes = this.state.panes;
    let idx;
    panes.forEach((el, i) => { 
      if(el.title === title) {
        idx = i
        return;
      }
    });
    console.log(idx);
    this.setState({selectedTab: idx})
    console.log(`${title}`);
  }

  render() {
    const panes = this.state.panes;
    console.log(panes);
    Array.from(panes).forEach( (el) => {
      console.log(el);
    })
    return (
      <div className="tabs-widget">
        <ul className="tabs-list">
          {panes.map((el) => { 
            if (el.title === panes[this.state.selectedTab].title) {
              return <li className="button-special"><button onClick={() => this.selectTab(el.title)} >{el.title}</button></li>;
            } else {
              return <li><button onClick={() => this.selectTab(el.title)}>{el.title}</button></li>;  
            }
            })}
        </ul>
        <div className="tab-content">
          <p>{panes[this.state.selectedTab].content}</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    
  }
}

export default Tabs;
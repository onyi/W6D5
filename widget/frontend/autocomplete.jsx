import React from 'react';

class Autocomplete extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      lists: ["Helloworld",
              "I am a list element",
              "Today's weather is great",
              "Blablablablabla hohoho testing",
              "Ice Cream anyone?",
              "AA is da best"],
      showData: "",
      searchString: ""
    };
    this.displayData = [];
    this.processSearchBar = this.processSearchBar.bind(this);
  }


  processSearchBar(ctx){
    let searchString = ctx.currentTarget.value;
    // console.log(`Context: ${searchString}`);
    // Change list content based on search result.
    this.displayData = [];
    this.state.lists.forEach((el, idx) => {
      const list = <li key={idx} className="autocomplete-list">{el}</li>;
      // console.log(`List content: ${el}`);
      if (!el || el.length === 0) {
        this.displayData.push(list);
      }else{
        if (el.toLowerCase().includes(searchString)) {
          this.displayData.push(list);
        }
      }
    });
    this.setState({
      showData: this.displayData,
      searchString: searchString
    });
  }

  // const handleSearchBar = evnet => {
  //   event.preventDefault();
  // };

  render(){

    // console.log(`List: ${this.state.lists}`);
    return (
      <section className="autocomplete-widget-content">
        <label htmlFor="searchBar">
          Search: 
        </label>
        <input type="text" name="searchBar" onChange={this.processSearchBar} value={this.state.searchString} />

        <ul className="autocomplete-list">
          {this.state.showData}
        </ul>
      </section>
    )
  }

  componentDidMount(){
    this.state.lists.forEach((el, idx) => {
      console.log(`List content: ${el}`);
      this.displayData.push(<li key={idx} className="autocomplete-list">{el}</li>);
    });
    // console.log(`displayData content: ${this.displayData}`);
    this.setState({
      showData: this.displayData
    })
  }





}

export default Autocomplete;
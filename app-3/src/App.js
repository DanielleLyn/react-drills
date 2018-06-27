import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      fliterString:"",
      groceries: [
        "milk",
        "eggs",
        "cheese",
        "butter"
      ]
    }
  }

  handleChange(filter){
    this.setState({filterString:filter})
  }

  render() {
    let foodsToDisplay = this.state.groceries.filter((element, index) => {
      return element.includes(this.state.filterString);
    }).map((element, index) => {
      return <h3 key={index}>{element}</h3>
    })

    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)} type="text"/>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;

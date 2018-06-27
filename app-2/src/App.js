import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state={
      groceries:[
    'milk', 'cheerios', 'fruit loops', 'grapes', 'cheese'
      ]
    }
  }

  render() {
    let displayGroceries = this.state.groceries.map((element,index) => {
      return (
        <h2 key={index}>{element}</h2>
      )
    })

    return (
      <div className="App">
        {displayGroceries}
      </div>
    );
  }
}

export default App;

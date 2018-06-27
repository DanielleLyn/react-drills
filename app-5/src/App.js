import React, {Component} from 'react';
import logo from './logo.svg';
import Image from './img.js';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Image myImage={"https://http.cat/409"} />
      </div>
    );
  }
}

export default App;
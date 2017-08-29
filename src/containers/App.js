import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Clock from '../containers/Clock'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock/>
      </div>
    );
  }
}

export default App;

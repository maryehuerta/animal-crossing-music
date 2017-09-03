import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Clock from '../containers/Clock';
import Music from '../components/music';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock/>
        <Music/>
      </div>
    );
  }
}

export default App;

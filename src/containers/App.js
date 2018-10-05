import React, { Component } from 'react';
import './App.css';
import Clock from '../containers/Clock';
import Music from '../components/music';
import Background from '../components/backgrounds'
class App extends Component {
  render() {
    return (
      <div className="sky">
        <Background />
        <Clock />
        {/* <Music /> */}
      </div>
    );
  }
}

export default App;

import React , { Component } from 'react';

export default class Background extends Component {
  render () {
    
    return(
      <div>
        <div className="sign"> <img className="logoImg" src={require("../images/Animal_Crossing_Logo.png")}  alt="sign"/> </div>
        <div className="globe-div">
          <img id="loading" className="globe" src={require("../images/GlobeAnimalCrosssingMusic.png")} alt="globe"  />
        </div>
      </div>
    );
  }
}
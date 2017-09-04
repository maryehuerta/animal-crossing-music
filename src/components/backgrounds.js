import React , { Component } from 'react';

export default class Background extends Component {
  render () {
    
    return(
      <div>
        <div className="sign"> <img className="logoImg" src={require("../images/Animal_Crossing_Logo.png")}/> </div>
        <div className="ground"> </div>
        <div className="trees"> 
          <img className="mediumtree" src={require("../images/cedar.png")} />
          <img src={require("../images/cedar.png")} />
          <img className="smalltree" src={require("../images/cedar.png")} />
          <img className="mediumtree" src={require("../images/cedar.png")} />
          <img className="smalltree" src={require("../images/cedar.png")} />
          <img src={require("../images/cedar.png")} />
        </div>
      </div>
    );
  }
}
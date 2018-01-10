import React , { Component } from 'react';

export default class Background extends Component {
  render () {
    
    return(
      <div>
        <div id="clouds">
          <div className="cloud x1"></div>
          <div className="cloud x2"></div>
          <div className="cloud x3"></div>
          <div className="cloud x4"></div>
          <div className="cloud x5"></div>
        </div>
        <div className="sign"> <img className="logoImg" src={require("../images/Animal_Crossing_Logo.png")}  alt="sign"/> </div>
        <div className="ground"> </div>
        <div className="trees"> 
          <img className="mediumtree" src={require("../images/cedar.png")} alt="tree" />
          <img src={require("../images/cedar.png")} alt="tree" />
          <img className="smalltree" src={require("../images/cedar.png")}  alt="tree"/>
          <img className="mediumtree" src={require("../images/cedar.png")}  alt="tree"/>
          <img className="smalltree" src={require("../images/cedar.png")}  alt="tree"/>
          <img src={require("../images/cedar.png")}  alt="tree"/>
        </div>
      </div>
    );
  }
}
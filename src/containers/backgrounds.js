import React, { Component } from 'react';

export default class Music extends Component {
	constructor(props) {
		super(props);
    this.state = {
			time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
    };
	}
	componentDidMount() {
    this.intervalID = setInterval( () => this.setTime(), 1000 );
	}
	componetWillUnmount(){
		clearInterval(this.intervalID);
	}
	setTime() {
		this.setState( {time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) } );  
	}

	setHour(){
		var d = new Date();
		var n = d.getHours();
		return n;
	}

	render (){
		
		return (
			<div className="sky">
				 
			</div>
			
		);
	}
}
import React, { Component } from 'react';
import Audio from 'react-audioplayer';
export default class Clock extends Component {
	constructor(props) {
		super(props);
    this.state = {
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) 
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
	
	render() {
		return(
			<div>
				{this.state.time}
				
				<iframe border="0" width="0" height="0" src="http://www.youtube.com/embed/tEWFq1_NVSg?autoplay=1&cc_load_policy=1"
> 
				</iframe>
				
			</div>
			
		);
	}
}
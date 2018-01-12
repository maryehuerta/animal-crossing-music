import React, { Component } from 'react';

const YoutubeMusic = [
	{type:"Normal", time:0 , url:"_4G7EWJ7Ik8"},
	{type:"Normal", time:1 , url:"ogZOuyEUaqM"},
	{type:"Normal", time:2 , url:"LAioanQMG_A"},
	{type:"Normal", time:3 , url:"_pCBzrFnTlw"},
	{type:"Normal", time:4 , url:"eSfQrWXD94A"},
	{type:"Normal", time:5 , url:"zQLvrhUXwtE"},
	{type:"Normal", time:6 , url:"mWa-tiP3a_o"},
	{type:"Normal", time:7 , url:"-CtfRww-2YM"},
	{type:"Normal", time:8 , url:"OHxpIqpAjz0"},
	{type:"Normal", time:9 , url:"T9ieUkNOEf4"},
	{type:"Normal", time:10, url:"25wXOGbmWOc"},
	{type:"Normal", time:11, url:"TPFZhtkP7M0"},
	{type:"Normal", time:12, url:"vZVS2FtVWHA"},
	{type:"Normal", time:13, url:"G3rtW1G2Ixg"},
	{type:"Normal", time:14, url:"LiXoQXCFhF8"},
	{type:"Normal", time:15, url:"CM58GBw4JkE"},
	{type:"Normal", time:16, url:"wqaKOCbeXmY"},
	{type:"Normal", time:17, url:"HXG9zU2Lb6g"},
	{type:"Normal", time:18, url:"iLSwc8wgJeo"},
	{type:"Normal", time:19, url:"rmtKHo7GB64"},
	{type:"Normal", time:20, url:"DhrsQO9Pkbs"},
	{type:"Normal", time:21, url:"Fl4M-a3eBnw"},
	{type:"Normal", time:22, url:"tEWFq1_NVSg"},
	{type:"Normal", time:23, url:"ytHqYVbuLt4"}
	
]

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
			<div>
				<iframe
					title="AnimalCrossing"
					width="0"
					height="0"
					src={"http://www.youtube.com/embed/" + YoutubeMusic[this.setHour()].url + "?autoplay=1&cc_load_policy=1&mute=0"}
				/> 
			</div>
			
		);
	}
}
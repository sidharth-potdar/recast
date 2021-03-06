import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Storage } from 'aws-amplify';
import { Button, Col, Container, Row } from 'reactstrap';
import ReactPlayer from 'react-player';

export default class Original extends Component {
	constructor(props) {
	 	super(props);

		this.state = {
			// originalLink: null,
			shouldPlay: localStorage.getItem('video_name'),
		};

		// this.pullOriginalFromS3 = this.pullOriginalFromS3.bind(this);
	};

	// pullOriginalFromS3() { 
	// 	console.log("pull original called");
	// 	Storage.get('staging/' + localStorage.getItem('video_name'))
	// 	.then(data => {
	// 		console.log(data);
	// 		this.setState({
	// 			originalLink: data,
	// 		})
	// 	})
	// 	.catch(err => {
	// 		console.log('error pulling from s3');
	// 	})
	// }

	render() {
		if (this.state.shouldPlay) {
			return (
				<div>
					<h3> Original Video </h3>
					<ReactPlayer 
						url={`https://hackgtbucket-hackgtaws.s3.amazonaws.com/public/staging/${localStorage.getItem('video_name')}`}
						playing 
						muted
						loop
						width={`${window.width / 2}px`}
					/>
					{this.state.originalLink}
				</div>
			);
		}
		else {
			return null;
		}
		
	}
};
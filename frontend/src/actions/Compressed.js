import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Storage } from 'aws-amplify';
import { Button, Col, Container, Row } from 'reactstrap';
import ReactPlayer from 'react-player'

export default class Compressed extends Component {
	constructor(props) {
	 	super(props);

		this.state = {
			// compressedLink: null,
			shouldPlay: localStorage.getItem('video_name'),

		};

		// this.pullCompressedFromS3 = this.pullCompressedFromS3.bind(this);
	};

	// pullCompressedFromS3() { 
	// 	console.log("pull compressed called");
	// 	Storage.get('new/' + localStorage.getItem('video_name'))
	// 	.then(data => {
	// 		console.log(data);
	// 		this.setState({
	// 			compressedLink: data,
	// 		})
	// 	})
	// 	.catch(err => {
	// 		console.log('error pulling from s3');
	// 	})
	// }

	render() {
		if (this.state.shouldPlay) {
			return (
				<div style={{justifyContent: "center"}}>
					<h3> Compressed Video </h3>
					<ReactPlayer 
						url={`https://hackgtbucket-hackgtaws.s3.amazonaws.com/public/new/${localStorage.getItem('video_name')}`}
						playing 
						muted
						loop
						width={`${window.width / 2}px`}
					/>
					{this.state.compressedLink}
				</div>
			);
		}
		else {
			return null;
		}
	}
};
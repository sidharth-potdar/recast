import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Storage } from 'aws-amplify';
// import Button from '../components/Button';
import { Button, Col, Container, Row } from 'reactstrap';
import ReactPlayer from 'react-player'

export default class Processing extends Component {
	constructor(props) {
	 	super(props);

		this.state = {
			originalLink: null,
			compressedLink: null,
		};

		this.pullOriginalFromS3 = this.pullOriginalFromS3.bind(this);
		this.pullCompressedFromS3 = this.pullCompressedFromS3.bind(this);
	};

	pullOriginalFromS3() { 
		console.log("pull original called");
		Storage.get('v_SoccerPenalty_g25_c04.avi')
		.then(data => {
			console.log(data);
			this.setState({
				originalLink: data,
			})
		})
		.catch(err => {
			console.log('error pulling from s3');
		})
	}

	pullCompressedFromS3() { 
		console.log("pull compressed called");
		Storage.get('v_SoccerPenalty_g25_c04.avi')
		.then(data => {
			console.log(data);
			this.setState({
				compressedLink: data,
			})
		})
		.catch(err => {
			console.log('error pulling from s3');
		})
	}

	render() {
		return (
			<div>
				<h3> Compressed Video </h3>
				<Button onClick={() => {this.pullCompressedFromS3()} }> pull </Button>
				<ReactPlayer url="https://hackgtbucket-hackgtaws.s3.amazonaws.com/public/v_SoccerPenalty_g21_c05.mp4" playing muted/>
				{this.state.compressedLink}
			</div>
		);
	}
};
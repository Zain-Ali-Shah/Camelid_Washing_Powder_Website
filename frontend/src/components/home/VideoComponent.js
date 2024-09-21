import React from "react";
import { Col, Button } from "react-bootstrap";
import "./VideoComponent.css";
import { useNavigate } from "react-router-dom";
import videoFile from "../../assets/video.mp4";

const VideoComponent = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/contact");
	};
	return (
		<>
			<Col lg="6" className="mx-auto my-5 text-center">
				<h1>Camelid Wash</h1>
				<h3>
					Camelid Wash is proudly made in Pakistan and is Pakistan's No. 1
					washing powder. We offer home delivery all over Pakistan, with free
					delivery services available for customers in Rawalpindi and Islamabad.
				</h3>
				<h4>For home delivery, please contact us.</h4>

				<Button variant="success" onClick={handleClick}>
					Contact Us
				</Button>
			</Col>
			<Col lg="6">
				<div className="video-container">
					<video controls>
						<source src={videoFile} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</Col>
		</>
	);
};

export default VideoComponent;

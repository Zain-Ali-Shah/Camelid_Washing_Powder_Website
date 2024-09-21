import React from "react";
import CamelidCarousel from "../home/CamelidCarousel";
import Row from "react-bootstrap/Row";
import VideoComponent from "../home/VideoComponent";
import DescriptionComponent from "../home/DescriptionComponent";

const HomePage = () => {
	return (
		<>
			<Row>
				<CamelidCarousel />
			</Row>
			<Row className="my-5">
				<VideoComponent />
			</Row>
			<Row className="my-5">
				<DescriptionComponent />
			</Row>
		</>
	);
};

export default HomePage;

import React from "react";
import { Col } from "react-bootstrap";

const DescriptionComponent = () => {
	return (
		<>
			<Col md="6" className="mx-auto text-center">
				<img
					src="/images/camlidImage2.jpg"
					alt="camlid-image"
					className="img-fluid"
					style={{ maxWidth: "100%", height: "400px" }}
				/>
			</Col>
			<Col md="6" className="my-5 text-center">
				<h1>Best Washing Powder which Takes Care of Your Clothes</h1>
				<p className="lead">
					Camelid Wash is an emerging washing powder brand aimed at delivering
					the best chemical solutions. We provide 'value for money' solutions
					for our loyal customers. Proudly made in Pakistan, made for Pakistan.
					<br /> For Hand Wash or Machine Wash.
				</p>
			</Col>
		</>
	);
};

export default DescriptionComponent;

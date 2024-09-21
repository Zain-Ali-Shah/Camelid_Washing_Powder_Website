import React from "react";
import PropTypes from "prop-types";

const CarouselImage = ({ text, imageSrc }) => {
	return (
		<div style={{ position: "relative", height: "400px" }}>
			<img
				src={imageSrc}
				alt={text}
				style={{ width: "100%", height: "100%", objectFit: "cover" }}
			/>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "rgba(0, 0, 0, 0)",
				}}
			>
				<h3 style={{ color: "white" }}>{text}</h3>
			</div>
		</div>
	);
};

CarouselImage.propTypes = {
	text: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
};

export default CarouselImage;

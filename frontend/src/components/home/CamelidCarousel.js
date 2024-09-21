import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import "./CamelidCarousel.css"; // Ensure this is imported

const CamelidCarousel = () => {
	return (
		<div>
			<Carousel>
				<Carousel.Item interval={1000} className="carousel-image">
					<CarouselImage
						text=""
						imageSrc="/images/firstImage.png"
						alt="Camlid Washing powder"
					/>
				</Carousel.Item>
				<Carousel.Item interval={1000} className="carousel-image">
					<CarouselImage
						text=""
						imageSrc="/images/secondImage.png"
						alt="Camlid Washing powder"
					/>
				</Carousel.Item>
				<Carousel.Item interval={1000} className="carousel-image">
					<CarouselImage
						text=""
						imageSrc="/images/thirdImage.png"
						alt="Camlid Washing powder"
					/>
				</Carousel.Item>
				<Carousel.Item interval={1000} className="carousel-image">
					<CarouselImage
						text=""
						imageSrc="/images/fourthImage.png"
						alt="Camlid Washing powder"
					/>
				</Carousel.Item>
				<Carousel.Item interval={1000} className="carousel-image">
					<CarouselImage
						text=""
						imageSrc="/images/fifthImage.png"
						alt="Camlid Washing powder"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default CamelidCarousel;

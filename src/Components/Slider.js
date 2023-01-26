import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<Slider {...settings}>
			<div class="slider__img" style={{ display: "flex" }}>
				<img src="images/slider/slider1.jpeg"></img>
			</div>
			<div class="slider__img">
				<img src="images/slider/slider2.jpeg"></img>

			</div>
			<div class="slider__img">
				<img src="images/slider/slider3.jpeg"></img>
			</div>
			<div class="slider__img">
				<img src="images/slider/slider4.jpeg"></img>

			</div>
			<div class="slider__img">
				<img src="images/slider/slider5.jpeg"></img>

			</div>
			<div class="slider__img">
				<img src="images/slider/slider6.jpeg"></img>

			</div>
		</Slider>
	);
}
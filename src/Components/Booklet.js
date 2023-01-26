import React from "react";
import Booklet from "react-slick";

export default function SimpleSlider() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<Booklet {...settings}>
			<div class="slider__img" style={{ display: "flex" }}>
				<img src="images/booklet/1.png"></img>
			</div>
			<div class="slider__img">
				<img src="images/booklet/2.png"></img>

			</div>
		</Booklet>
	);
}
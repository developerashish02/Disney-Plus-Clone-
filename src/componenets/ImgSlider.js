import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoPlay: true,
	};
	return (
		<Carousel {...settings}>
			<Wrap>
				<img src="\Disney Plus\images\slider-badag.jpg" alt="" />
			</Wrap>
			<Wrap>
				<img src="\Disney Plus\images\slider-badging.jpg" alt="" />
			</Wrap>
		</Carousel>
	);
};

const Carousel = styled(Slider)`
	margin-top: 20px;

	ul li button {
		&:before {
			font-size: 10px;
			color: white;
		}
	}

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`;

const Wrap = styled.div`
	cursor: pointer;
	img {
		border: 4px solid transparent;
		border-radius: 4px;
		width: 100%;
		height: 100%;
		transition-duration: 300ms;
		&:hover {
			border: 4px solid white;
		}
	}
`;
export default ImgSlider;

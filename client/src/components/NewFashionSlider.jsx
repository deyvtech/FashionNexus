import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewFashionSlider({ children }) {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "80px",
		slidesToShow: 3,
		speed: 500,
		arrows: true,
	};
	return (
		<div className="slider-container mt-10">
      <Slider {...settings}>
        {children}
      </Slider>
		</div>
	);
}

export default NewFashionSlider;

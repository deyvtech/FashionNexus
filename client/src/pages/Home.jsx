import HomeSlider from "@/components/Home/HomeSlider";
import { Link } from "@nextui-org/link";
// import { useOutletContext } from "react-router-dom";
import HomeTitle from "@/components/Home/HomeTitle";
import NewFashionSlider from "@/components/NewFashionSlider";
import NewFashionSliderItem from "@/components/NewFashionSliderItem";
import { newFashionImage } from "@/data";

export default function Home() {
	// const { ref } = useOutletContext();
	return (
		<div>
			<HomeSlider>
				<HomeTitle />
				<div className="mt-24 mx-auto">
					<Link
						href="/shop"
						className="custom-transition  hover:opacity-[.8] block max-w-[200px] rounded-lg p-4 text-xl font-inter font-medium text-center bg-gradient-to-r from-fnAccent-900 to-[#FFD1C5] mx-auto text-white"
					>
						Shop Now!
					</Link>
				</div>
			</HomeSlider>

			{/* Collections */}
			<section className="max-w-[1280px] py-10 mx-auto">
				<h2 className="text-[60px] font-exo-2 font-bold text-center">
					New Collection
				</h2>

				{/*  SLIDERS */}
				<h3 className="text-[32px] font-inter font-bold mt-40">
					Men's New
				</h3>
				<NewFashionSlider>
					{newFashionImage.men.map((image, key) => (
						<NewFashionSliderItem  image={image} key={key}/> 
					))}
				</NewFashionSlider>

				<h3 className="text-[32px] font-inter font-bold mt-40">
					Women's New
				</h3>
				<NewFashionSlider>
					{newFashionImage.women.map((image, key) => (
						<NewFashionSliderItem  image={image} key={key}/> 
					))}
				</NewFashionSlider>

				<h3 className="text-[32px] font-inter font-bold mt-40">
					Kids New
				</h3>
				<NewFashionSlider>
					{newFashionImage.kids.map((image, key) => (
						<NewFashionSliderItem  image={image} key={key}/> 
					))}
				</NewFashionSlider>
			</section>
		</div>
	);
}


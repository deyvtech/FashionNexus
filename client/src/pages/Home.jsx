import React from 'react'
// import { Link } from "react-router-dom";
import HomeSlider from "../components/Home/HomeSlider";
import { Link } from "@nextui-org/link";
export default function Home() {
	return (
		<>
			<HomeSlider>
				<h1 className="text-[64px] font-oswald leading-[normal] font-bold text-center max-w-[50%] mx-auto">
					Unleash Your Style: Exclusive Clothing Collection
				</h1>
				<div className="mt-24 mx-auto">
					<Link
						href="/shop"
						className="custom-transition  hover:opacity-[.8] block max-w-[200px] rounded-lg p-4 text-xl font-inter font-medium text-center bg-gradient-to-r from-fnAccent-900 to-[#FFD1C5] mx-auto text-white"
					>
						Shop Now!
					</Link>
				</div>
			</HomeSlider>
		</>
	);
}

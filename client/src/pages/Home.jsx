import React from 'react'
import HomeSlider from '@/components/Home/HomeSlider';
import { Link } from "@nextui-org/link";
import { useOutletContext } from "react-router-dom";
import HomeTitle from '@/components/Home/HomeTitle';


export default function Home() {
	const {ref}  = useOutletContext()
	return (
		<div>
			<HomeSlider >
				<HomeTitle text={"Unleash Your Style: "}/>
				<HomeTitle text={"Exclusive Clothing Collection"}/>
				<div className="mt-24 mx-auto">
					<Link
						href="/shop"
						className="custom-transition  hover:opacity-[.8] block max-w-[200px] rounded-lg p-4 text-xl font-inter font-medium text-center bg-gradient-to-r from-fnAccent-900 to-[#FFD1C5] mx-auto text-white"
					>
						Shop Now!
					</Link>
				</div>
			</HomeSlider>

			{/* Featured */}
			<section className='max-w-[1280px] py-10 mx-auto' ref={ref}>
				<h2 className='text-[60px] font-exo-2 font-bold text-center'>New Collection</h2>
			</section>
		</div>
	);
}

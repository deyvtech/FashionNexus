
export default function HomeSlider({ children }) {
	
	return (
		<section style={{backgroundImage: `url(https://res.cloudinary.com/doilhupqa/image/upload/v1718104069/ecommerce/slider3_ldr9e3.jpg)`}} className={`pb-10 relative custom-transition text-white pt-32  bg-center bg-cover bg-blend-lighten h-[100vh] `}>
			<div className="h-full w-full bg-[#00000060] absolute top-0"></div>
			<div className="max-w-[1280px] mx-auto z-30 relative">{children}</div>
		</section>
	);
}

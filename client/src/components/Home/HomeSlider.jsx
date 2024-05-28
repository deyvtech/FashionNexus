import React, { useEffect, useState } from "react";
import { getImageUrl } from "../../utils/getImgUrl";

export default function HomeSlider({ children }) {
	const [count, setCount] = useState(1);
	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prev) => prev + 1);

			if (count === 3) {
				setCount(1);
            }
        }, 5000);
		return () => {
			clearInterval(interval);
		};
	}, [count]);

	return (
		<section style={{backgroundImage: `url(${getImageUrl(`slider${count}.jpg`)})`}} className={`pb-10 relative custom-transition text-white pt-32  bg-center bg-cover bg-blend-lighten h-[100vh] `}>
			<div className="h-full w-full bg-[#00000060] absolute top-0"></div>
			<div className="max-w-[1280px] mx-auto z-30 relative">{children}</div>
		</section>
	);
}

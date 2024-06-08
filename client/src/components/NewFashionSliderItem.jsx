import { getImageUrl } from "@/utils/getImgUrl";
import { Image } from "@nextui-org/image";

export default function NewFashionSliderItem({ image }) {
	return (
		<div className=" max-h-[300px !impotant] relative">
			<div className="absolute px-4 top-10 z-20 text-fnAccent-900 ">
				<p>$260</p>
			</div>
			<Image
				src={getImageUrl(image)}
				alt=""
				className="object-cover object-center block w-full"
				loading="lazy"
				removeWrapper
			/>
			<div className="absolute bottom-0 z-10 px-4">
				cart
			</div>
		</div>
	);
}

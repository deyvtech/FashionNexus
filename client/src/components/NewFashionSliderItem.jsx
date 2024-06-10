import { getImageUrl } from "@/utils/getImgUrl";
import { Image } from "@nextui-org/image";
import Star from "./Star";
import { Button} from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function NewFashionSliderItem({ image }) {
	return (
		<div className=" group max-h-[300px !impotant] relative cursor-pointer overflow-hidden rounded-lg">
			<Image
				src={getImageUrl(image)}
				alt=""
				className="object-cover object-center block w-full"
				loading="lazy"
				removeWrapper
			/>
			<div className="group-hover:h-[20%] group-hover:p-4 transition-height px-4 h-0 py-0 overflow-hidden absolute bottom-0 z-20 w-full bg-gradient-to-t from-fnAccent-100 to-transparent  backdrop-blur-sm shadow-md rounded-lg flex justify-between items-center">
				<div >
					<h4 className="text-white text-lg">Product Name</h4>
					<Star rating={5} />
					<p className="text-md text-white">$29.99 <span className="line-through text-sm font-light text-fnAccent-970">$99.99</span></p>
				</div>
				<div className="space-x-3">
				<Button isIconOnly color="primary" variant="flat">
					<Icon
						icon="solar:heart-angle-linear"
						className="text-3xl "
					/>{" "}
				</Button>
				<Button isIconOnly color="primary" variant="flat">
					<Icon
						icon="solar:cart-plus-linear"
						className="text-3xl "
					/>{" "}
				</Button>
				</div>
			</div>
		</div>
	);
}

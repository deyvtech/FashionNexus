import { Outlet } from "react-router-dom";
import { Provider } from "@/provider";
import { getImageUrl } from "@/utils/getImgUrl";


export default function AuthLayout() {

	return (
		<Provider>
			<div className='bg-custom-gradient-dark w-full flex '>
				<Outlet />
				<div className=" relative">
					<img src={getImageUrl('form-bg.jpg') } alt="" className="h-full w-full  object-cover object-center "/>
				</div>
			</div>
		</Provider>
	);
}

import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "@/provider";
import { getImageUrl } from "@/utils/getImgUrl";


export default function AuthLayout() {

	return (
		<Provider>
			<div className='bg-custom-gradient-dark h-[100vh] w-full flex items-center'>
				<Outlet />
				<div className="my-6 mr-20 relative rounded-xl overflow-hidden">
					<img src={getImageUrl('form-bg.jpg') } alt="" className="h-full w-full"/>
				</div>
			</div>
		</Provider>
	);
}

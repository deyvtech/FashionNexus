import { Outlet } from "react-router-dom";
import { NextProvider } from "@/provider";
import { ToastContainer, Zoom } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export default function AuthLayout() {

	return (
		<NextProvider>
			<div className="bg-custom-gradient-dark w-full flex ">
				<Outlet />
				<div className=" relative">
					<img
						src="https://res.cloudinary.com/doilhupqa/image/upload/v1718104069/ecommerce/form-bg_wuqgjd.jpg"
						alt=""
						className="h-full w-full  object-cover object-center "
					/>
				</div>
			</div>
			<ToastContainer
				position="top-center"
				autoClose={3000}
				theme="dark"
				transition={Zoom}
			/>
		</NextProvider>
	);
}

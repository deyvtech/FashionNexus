import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet , useNavigate} from "react-router-dom";
import { NextUIProvider } from '@nextui-org/system';


export default function AppLayout() {
	const navigate = useNavigate();
	return (
		<NextUIProvider navigate={navigate}>
			<div id="site-wrapper">
				<Header />
				<div id="content-wrapper">
					<Outlet />
				</div>
				<Footer />
			</div>
		</NextUIProvider>
	);
}

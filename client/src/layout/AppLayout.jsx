import React from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { Outlet , useNavigate} from "react-router-dom";
import { NextUIProvider } from '@nextui-org/react';

// intersection
import { useInView } from 'react-intersection-observer'

export default function AppLayout() {
	const navigate = useNavigate();
	
	const [ ref, inView ] = useInView({
		threshold: 0.2
	})

	return (
		<NextUIProvider navigate={navigate}>
			<div id="site-wrapper">
				<Header inView={ inView} />
				<div id="content-wrapper">
					<Outlet context={{ref}}/>
				</div>
				<Footer />
			</div>
		</NextUIProvider>
	);
}

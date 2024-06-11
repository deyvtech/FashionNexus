import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { Outlet } from "react-router-dom";
import { NextProvider } from "@/provider";

// intersection
import { useInView } from "react-intersection-observer";

export default function AppLayout() {

	const [ref, inView] = useInView({
		threshold: 0,
	});

	return (
		<NextProvider>
			<div id="site-wrapper">
				<Header />
				<div id="content-wrapper">
					<Outlet />
				</div>
				<Footer />
			</div>
		</NextProvider>
	);
}

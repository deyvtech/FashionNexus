import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "@/provider";

// intersection
import { useInView } from "react-intersection-observer";

export default function AppLayout() {

	const [ref, inView] = useInView({
		threshold: 0,
	});

	return (
		<Provider>
			<div id="site-wrapper">
				<Header />
				<div id="content-wrapper">
					<Outlet />
				</div>
				<Footer />
			</div>
		</Provider>
	);
}

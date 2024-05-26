import { NextUIProvider } from "@nextui-org/system";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, About, Shop } from "./pages/index";
import Header from "./layout/Header";

export default function App() {
	const navigate = useNavigate();

	return (
		<>
      <NextUIProvider navigate={navigate}>
        <Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
			</NextUIProvider>
		</>
	);
}

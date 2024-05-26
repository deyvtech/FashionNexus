import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, About, Contact, Shop, Profile, Cart, Checkout } from "./pages";
import AppLayout from "./layout/AppLayout";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/contact", element: <Contact /> },
			{ path: "/shop", element: <Shop /> },
			{ path: "/profile/:profileID", element: <Profile /> },
			{ path: "/cart", element: <Cart /> },
			{ path: "/checkout", element: <Checkout /> },
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}

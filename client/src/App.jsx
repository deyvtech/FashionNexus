import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, About, Contact, Shop, Profile, Cart, Checkout, SignIn, SignUp } from "@/pages";
import AppLayout from "@/layouts/AppLayout";
import AuthLayout from "@/layouts/AuthLayout";

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
	{
		element: <AuthLayout />,
		children: [
			{ path: "/sign-in", element: <SignIn /> },
			{ path: "/sign-up", element: <SignUp /> },
		]
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}

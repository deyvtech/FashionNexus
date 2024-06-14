import { useLocation } from "react-router-dom";
import { Link } from "@nextui-org/react";

import IconButton from "@/components/IconButton";
import { menus } from "@/data";
import { useSelector } from "react-redux";

const Header = () => {
	const location = useLocation();
	const {isAuthenticated} = useSelector((state) => state.auth)

	return (
		<header
			className={` custom-transition  shadow-md ${
				location.pathname === "/" && "fixed" } top-0 w-full z-50 bg-[#2015124d] backdrop-blur-md border-b-0 custom-transition p-4`}
		>
			<div className="max-w-[1280px] mx-auto flex justify-between items-center">
				<Link href={"/"} className="font-exo-2">
					<h1 className="bg-gradient-to-r from-fnAccent-900 to-fuchsia-500 bg-clip-text text-transparent font-bold text-4xl">
						FashionNexus.
					</h1>
				</Link>
				<nav
					className={`font-inter text-base font-medium text-${
						location.pathname === "/" ? "white" : "black"
					}`}
				>
					<ul className="flex">
						{menus.headerMenu.map((menu) => (
							<li className="px-4" key={menu.key}>
								<Link
									href={menu.href}
									className={`hover:text-fnAccent-900 text-${
										location.pathname === "/"
											? "white"
											: "black"
									}`}
								>
									{menu.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="flex items-center space-x-2">
					<div>
						<IconButton
							href={""}
							icon={"solar:magnifer-linear"}
							color="primary"
							variant="light"
							aria-label="Search"
							iconStyles={`text-2xl text-${
								location.pathname === "/" ? "white" : "black"
							}`}
						/>
						{isAuthenticated && (
							<>
								<IconButton
									href={"/cart"}
									icon={"solar:cart-outline"}
									color="primary"
									variant="light"
									aria-label="Cart"
									iconStyles={`text-2xl text-${
										location.pathname === "/"
											? "white"
											: "black"
									}`}
								/>
								<IconButton
									href={"/profile/id"}
									icon={"solar:user-circle-outline"}
									color="primary"
									variant="light"
									aria-label="Cart"
									iconStyles={`text-2xl text-${
										location.pathname === "/"
											? "white"
											: "black"
									}`}
								/>
							</>
						)}
					</div>
					{!isAuthenticated && (
						<div className="text-white">
						<Link
							href="/sign-in"
							className="text-[14px] text-fnAccent-960"
						>
							Sign In
						</Link>{" "}
						/{" "}
						<Link
							href="/sign-up"
							className="text-[14px] text-fnAccent-960"
						>
							Sign Up
						</Link>
					</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;

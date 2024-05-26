import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "@nextui-org/link";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";

const Header = () => {
	const location = useLocation();
	return (
		<header
			className={`p-4  border-b-1 border-slate-700 ${
				location.pathname === "/" && "absolute"
			} top-0 w-full z-50`}
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
						<li className="px-4">
							<Link
								href="/"
								className={`hover:text-fnAccent-900 custom-transition text-${
						location.pathname === "/" ? "white" : "black"
					}`} 
							>
								Home
							</Link>
						</li>
						<li className="px-4">
							<Link
								href="/shop"
								className={`hover:text-fnAccent-900 custom-transition text-${
						location.pathname === "/" ? "white" : "black"
					}`}
							>
								Shop
							</Link>
						</li>
						<li className="px-4">
							<Link
								href="/about"
								className={`hover:text-fnAccent-900 custom-transition text-${
						location.pathname === "/" ? "white" : "black"
					}`}
							>
								About
							</Link>
						</li>
						<li className="px-4">
							<Link
								href="/contact"
								className={`hover:text-fnAccent-900 custom-transition text-${
						location.pathname === "/" ? "white" : "black"
					}`}
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
				<div>
					<Button
						isIconOnly
						color="primary"
						variant="light"
						aria-label="Search"
					>
						<Icon
							icon="solar:magnifer-linear"
							className={`text-2xl text-${
								location.pathname === "/" ? "white" : "black"
							}`}
						/>
					</Button>
					<Button
						isIconOnly
						href="/cart"
						as={Link}
						color="primary"
						variant="light"
						aria-label="Cart"
					>
						<Icon
							icon="solar:cart-outline"
							className={`text-2xl text-${
								location.pathname === "/" ? "white" : "black"
							}`}
						/>
					</Button>

					<Button
						isIconOnly
						href="/profile/id"
						as={Link}
						color="primary"
						variant="light"
						aria-label="User"
					>
						<Icon
							icon="solar:user-circle-outline"
							className={`text-2xl text-${
								location.pathname === "/" ? "white" : "black"
							}`}
						/>
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;

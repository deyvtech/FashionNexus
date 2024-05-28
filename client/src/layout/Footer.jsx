import React from 'react'
import { Link, Input, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import IconButton from "../components/IconButton";

export default function Footer() {
	return (
		<footer className="pt-10 bg-gradient-to-t mt-32">
			<div className="max-w-[1280px] mx-auto">
				<div className="flex justify-center">
					<div className="w-[30%]">
						<Link href={"/"} className="font-exo-2">
							<h1 className="bg-gradient-to-r from-fnAccent-900 to-fuchsia-500 bg-clip-text text-transparent font-bold text-2xl">
								FashionNexus.
							</h1>
						</Link>
					</div>
					<div className="w-[30%]">
						<Input
							type="email"
							label="Enter email address"
							variant="bordered"
							className="text-white"
							endContent={
								<Button className="bg-fnAccent-900">
									{" "}
									Submit{" "}
								</Button>
							}
						/>
					</div>
				</div>
				<div className="mt-10 grid grid-cols-4">
					<div>
						<h3 className="text-xl text-white py-3">Company</h3>
						<ul className="space-y-1">
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									Sustainability
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									Affiliate Program
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl text-white py-3">Category</h3>
						<ul className="space-y-1">
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									New Arrivals
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									Women
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									Men
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									Kids
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl text-white py-3">
							Customer Service
						</h3>
						<ul className="space-y-1">
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									Shipping Information
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									Returns & Exchanges
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									Order Tracking
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
								>
									Size Guide
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-md text-white py-3">Follow Us:</h3>
						<IconButton
							href={""}
							icon={"bxl:twitter"}
							color="primary"
							variant="light"
							aria-label="Twitter"
							iconStyles={"text-2xl text-white"}
						/>
						<IconButton
							href={""}
							icon={"bxl:linkedin"}
							color="primary"
							variant="light"
							aria-label="Linkedin"
							iconStyles={"text-2xl text-white"}
						/>
						<IconButton
							href={""}
							icon={"bxl:facebook"}
							color="primary"
							variant="light"
							aria-label="Facebook"
							iconStyles={"text-2xl text-white"}
						/>
						<IconButton
							href={""}
							icon={"bxl:youtube"}
							color="primary"
							variant="light"
							aria-label="Youtube"
							iconStyles={"text-2xl text-white"}
						/>
						<IconButton
							href={""}
							icon={"bxl:pinterest-alt"}
							color="primary"
							variant="light"
							aria-label="Twitter"
							iconStyles={"text-2xl text-white"}
						/>
						<h3 className="text-md text-white py-3">Location:</h3>
						<address className='text-white text-xs'>
							<p>
								<strong>FashionNexus</strong>
							</p>
							<p>1234 Elm Street</p>
							<p>Suite 567</p>
							<p>Metropolis, CA 90210</p>
							<p>USA</p>
							<p>Phone: (123) 456-7890</p>
							<p>
								Email:{" "}
								<a href="mailto:info@companyname.com" className='text-fnAccent-950'>
									info@companyname.com
								</a>
							</p>
						</address>
					</div>
        </div>
        <div className='mt-28 border-t border-fnDark'>
          <p className='text-white py-5 text-sm font-exo-2'>&copy; {new Date().getFullYear() } Created by: Dave Lexter Supsup</p>
        </div>
			</div>
		</footer>
	);
}

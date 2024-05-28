import React from 'react'
import { Link, Input, Button } from "@nextui-org/react";
import IconButton from "../components/IconButton";
import FooterMenu from '../components/FooterMenu';
import { footerMenu, social } from '../data';

export default function Footer() {
	return (
		<footer className="pt-10 bg-gradient-to-t">
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
					<FooterMenu menus={footerMenu.companyMenu} title={'Category'}/>
					<FooterMenu menus={footerMenu.categoryMenu} title={'Category'}/>
					<FooterMenu menus={footerMenu.customerServiceMenu} title={'Category'}/>
					<div>
						<h3 className="text-md text-white py-3">Follow Us:</h3>
						{social.map((soc) => (
							<IconButton
								key={soc.name}
							href={""}
							icon={soc.icon}
							color="primary"
							variant="light"
							aria-label={soc.ariaName}
							iconStyles={"text-2xl text-white"}
						/>
						))}
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

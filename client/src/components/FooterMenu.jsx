import React from "react";
import { Link } from "@nextui-org/link";

export default function FooterMenu({ menus, title }) {
	return (
		<div>
			<h3 className="text-xl text-white py-3">{title}</h3>
			<ul className="space-y-1">
				{menus.map((menu) => (
					<li key={menu.key}>
						<Link
							href={menu.href}
							className="text-fnAccent-700 hover:text-fnAccent-960 text-sm"
						>
							{menu.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

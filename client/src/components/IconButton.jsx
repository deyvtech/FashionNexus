import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/react";

export default function IconButton({ href, icon, iconStyles, ...props }) {
	return (
		<Button isIconOnly href={href} as={Link} variant="light" {...props}>
			<Icon icon={icon} className={iconStyles} />
		</Button>
	);
}

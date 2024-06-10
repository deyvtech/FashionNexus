import React from "react";
import { Icon } from "@iconify/react";

export default function Star({rating}) {
	return (
		<div className="flex">
			{Array.from({ length: 5 }).map((_, i) => (
				<Icon
					icon="material-symbols:star-rounded"
                    className={`${i < rating ? 'text-fnAccent-900' : 'text-black'} text-[24px]`}
                    key={i}
				/>
			))}
		</div>
	);
}

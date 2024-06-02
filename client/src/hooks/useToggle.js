import { useState } from "react";

export default function useToggle() {
	const [value, setValue] = useState(false);

	const toggleValue = (value) => {
		setValue((currentValue) =>
			typeof value === "boolean" ? value : !currentValue
		);
	};

	return [value, toggleValue];
}

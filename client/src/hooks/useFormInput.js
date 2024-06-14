import React, { useState, useCallback } from "react";

export default function useFormInput( initialState ) {
	const [stateData, setStateData] = useState(initialState);

	const handleChangeInput = useCallback((e) => {
		const { name, value } = e.target;
		setStateData((prev) => {
			return { ...prev, [name]: value };
		});
	}, []);

	return { handleChangeInput, stateData, setStateData };
}

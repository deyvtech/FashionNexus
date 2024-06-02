import {useState } from "react";

export default function useValidateError() {
	const [inputError, setInputError] = useState({});

	const validator = (data) => {
		const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
		const errors = {};

		console.log(data);
		if (!data.firstName) errors.firstName = "First name is required";
		else if (data.firstName.length < 6)
			errors.firstName = "First Name must be 6 characters long";

		if (!data.lastName) errors.lastName = "Last name is required";
		else if (data.lastName.length < 6)
			errors.lastName = "Last Name must be 6 characters long";

		if (!data.emailAddress) errors.emailAddress = "Email is required";
		else if (!data.emailAddress.match(regex))
			errors.emailAddress = "Email address is not valid";

		if (!data.password) errors.password = "Password is required";
		else if (data.password.length < 8)
			errors.password = "Password must be 8 characters long";

		if (!data.confirmPassword)
			errors.confirmPassword = "Confirm Password is required";
		else if (data.confirmPassword !== data.password)
			errors.confirmPassword = "Passwords does not match";

		return errors;
    };

    const setError = (data) => {
        setInputError(validator(data))
    }

	return [inputError, setError];
}

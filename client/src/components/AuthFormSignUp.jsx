import React, { useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Input, Checkbox, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";

// Custom hooks
import useValidateError from "@/hooks/useValidateError";
import useFormInput from "@/hooks/useFormInput";

// Utils
import { toastError, toastSuccess } from "@/utils/toast";
import { reducer } from "@/utils/formReducer";

const initialState = {
	firstName: "Dave Lexter",
	lastName: "Supsup",
	emailAddress: "kingnorway17@gmail.com",
	password: "123123123",
	confirmPassword: "123123123",
};

export default function AuthFormSignUp() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	// Use CustomHooks
	const [inputError, setError] = useValidateError();
	const { handleChangeInput, stateData, setStateData } =
		useFormInput(initialState);

	const [stateReducer, dispatch] = useReducer(reducer, {
		isLoading: false,
		showPassword: false,
		showConfirmPassword: false,
		isAgreeTheTerms: false,
	});

	const handleSubmitForm = async () => {
		const errors = setError(stateData, pathname);

		const apiUrl = import.meta.env.VITE_API_DOMAIN;

		if (!stateReducer.isAgreeTheTerms && Object.keys(errors).length === 0)
			return toastError("Please accept Terms and Conditions to continue");

		if (Object.keys(errors).length === 0 && stateReducer.isAgreeTheTerms) {
			try {
				dispatch({ type: "LOADING" });
				const response = await fetch(`${apiUrl}/auth/signup`, {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					credentials: "include",
					body: JSON.stringify(stateData),
				});
				const data = await response.json();

				setStateData(initialState);

				dispatch({ type: "LOADING" });
				if (response.status === 403)
					return toastError("User already exist!");

				if (response.status === 201) {
					toastSuccess("Registered successfully!");
					return navigate("/sign-in", { replace: true });
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<>
			<form className="mt-10 space-y-6">
				<div className="flex gap-2">
					<Input
						value={stateData.firstName}
						type="text"
						startContent={<Icon icon="solar:user-bold" />}
						name="firstName"
						label="First Name"
						radius="sm"
						onChange={handleChangeInput}
						isInvalid={inputError.firstName}
						errorMessage={inputError.firstName}
					/>
					<Input
						value={stateData.lastName}
						type="text"
						startContent={<Icon icon="solar:user-bold" />}
						name="lastName"
						label="Last Name"
						radius="sm"
						onChange={handleChangeInput}
						isInvalid={inputError.lastName}
						errorMessage={inputError.lastName}
					/>
				</div>
				<Input
					value={stateData.emailAddress}
					type="email"
					startContent={<Icon icon="solar:inbox-bold" />}
					name="emailAddress"
					label="Email Address"
					radius="sm"
					onChange={handleChangeInput}
					isInvalid={inputError.emailAddress}
					errorMessage={inputError.emailAddress}
				/>
				<Input
					value={stateData.password}
					type={stateReducer.showPassword ? "text" : "password"}
					startContent={<Icon icon="solar:lock-bold" />}
					name="password"
					label="Password"
					radius="sm"
					endContent={
						<Button
							isIconOnly
							variant="light"
							onClick={() => dispatch({ type: "PASSWORD" })}
						>
							<Icon
								icon={`solar:${
									stateReducer.showPassword
										? "eye-closed-bold"
										: "eye-bold"
								}`}
								className="text-xl"
							/>
						</Button>
					}
					onChange={handleChangeInput}
					isInvalid={inputError.password}
					errorMessage={inputError.password}
				/>
				<Input
					value={stateData.confirmPassword}
					type={
						stateReducer.showConfirmPassword ? "text" : "password"
					}
					startContent={<Icon icon="solar:lock-bold" />}
					name="confirmPassword"
					label="Confirm Password"
					radius="sm"
					endContent={
						<Button
							isIconOnly
							variant="light"
							onClick={() =>
								dispatch({ type: "CONFIRM_PASSWORD" })
							}
						>
							<Icon
								icon={`solar:${
									stateReducer.showConfirmPassword
										? "eye-closed-bold"
										: "eye-bold"
								}`}
								className="text-xl"
							/>
						</Button>
					}
					onChange={handleChangeInput}
					isInvalid={inputError.confirmPassword}
					errorMessage={inputError.confirmPassword}
				/>

				<div>
					<Checkbox
						onChange={() => dispatch({ type: "AGREE_TERMS" })}
					>
						I agree to the
					</Checkbox>{" "}
					<Link href="/" className="underline">
						Terms & Conditions
					</Link>
				</div>
				<div className="flex items-center justify-between">
					<p>
						Already have an account?{" "}
						<Link href="/sign-in">Sign In</Link>
					</p>

					<Button
						className="px-10"
						color="primary"
						size="lg"
						onClick={handleSubmitForm}
						isLoading={stateReducer.isLoading}
						spinner={
							<Icon
								icon="ph:spinner-light"
								className="text-2xl animate-spin "
							/>
						}
					>
						{stateReducer.isLoading ? "Loading..." : "Register"}
					</Button>
				</div>
			</form>
		</>
	);
}

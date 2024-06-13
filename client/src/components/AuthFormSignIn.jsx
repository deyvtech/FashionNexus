import React, { useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Input, Checkbox, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";

// Custom Hooks
import useValidateError from "@/hooks/useValidateError";
import useFormInput from "@/hooks/useFormInput";

// Utilites
import { toastError, toastSuccess } from "@/utils/toast";
import { reducer } from "@/utils/formReducer";

export default function AuthFormSignIn() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const initialState = {
		emailAddress: "kingnorway17@gmail.com",
		password: "123123123",
		confirmPassword: "123123123",
	};

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
				const response = await fetch(`${apiUrl}/auth/signin`, {
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

				if (response.status === 401 && data.login === false)
					return toastError("Invalid Credentials!");

				if (response.status === 200 && data.login === true) {
					toastSuccess("Login successfully!");
					return navigate("/", { replace: true });
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<>
			<form className="mt-10 space-y-6">
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
						Don&apos;t have an account?{" "}
						<Link href="/sign-up">Sign Up</Link>
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
						{stateReducer.isLoading ? "Loading" : "Login"}
					</Button>
				</div>
			</form>
		</>
	);
}

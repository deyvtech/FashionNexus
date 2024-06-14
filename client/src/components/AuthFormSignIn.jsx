import React, {useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Input, Checkbox, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";

// Custom Hooks
import useValidateError from "@/hooks/useValidateError";
import useFormInput from "@/hooks/useFormInput";

// Utilites
import { toastError } from "@/utils/toast";
import { reducer } from "@/utils/formReducer";

// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/app/slices/authSlice";


const initialState = {
	emailAddress: "kingnorway17@gmail.com",
	password: "123123123",
	confirmPassword: "123123123",
};


export default function AuthFormSignIn() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	// Redux Toolkit
	const dispatchRedux = useDispatch();
	const { loading } = useSelector((state) => state.auth);

	// Use CustomHooks
	const [inputError, setError] = useValidateError();
	const { handleChangeInput, stateData, setStateData } = useFormInput(initialState);

	// React Reducer
	const [stateReducer, dispatch] = useReducer(reducer, {
		showPassword: false,
		showConfirmPassword: false,
		isAgreeTheTerms: false,
	});

	const handleSubmitForm = async () => {

		// Validate Error
		const errors = setError(stateData, pathname);

		// If checkbox is not checked
		if (!stateReducer.isAgreeTheTerms && Object.keys(errors).length === 0)
			return toastError("Please accept Terms and Conditions to continue");

		if (Object.keys(errors).length === 0 && stateReducer.isAgreeTheTerms) {
			dispatchRedux(loginUser(stateData)).then((res) => {
				if (res.type === "auth/loginUser/fulfilled") {
					navigate("/", { replace: true });
				}
			});
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
						isLoading={loading}
						spinner={
							<Icon
								icon="ph:spinner-light"
								className="text-2xl animate-spin "
							/>
						}
					>
						{loading ? "Loading" : "Login"}
					</Button>
				</div>
			</form>
		</>
	);
}

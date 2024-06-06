import { Button, Input, Checkbox, Link } from "@nextui-org/react";
import { useCallback, useState, useReducer } from "react";
import { Icon } from "@iconify/react";
import { useNavigate , useLocation  } from "react-router-dom";
import useValidateError from "@/hooks/useValidateError";
import {toastError, toastSuccess} from "@/utils/toast";

const reducer = (state, action) => {
	switch (action.type) {
		case "USER_FORM":
			return {...state, }
		case "LOADING":
			return { ...state, isLoading: !state.isLoading };
		case "PASSWORD":
			return { ...state, showPassword: !state.showPassword };
		case "CONFIRM_PASSWORD":
			return { ...state, showConfirmPassword: !state.showConfirmPassword };
		case "AGREE_TERMS":
			return {...state, isAgreeTheTerms: !state.isAgreeTheTerms}
		default:
			return state;
	}
};

export default function AuthForm() {
	const { pathname } = useLocation();
	const navigate = useNavigate()
	const initialState =
		pathname === "/sign-up"
			? {
					firstName: "Dave Lexter",
					lastName: "Supsup",
					emailAddress: "kingnorway17@gmail.com",
					password: "123123123",
					confirmPassword: "123123123",
			}
			: {
					emailAddress: "kingnorway17@gmail.com",
					password: "123123123",
					confirmPassword: "123123123",
			};

	const [state, dispatch] = useReducer(reducer, {
		isLoading: false,
		showPassword: false,
		showConfirmPassword: false,
		isAgreeTheTerms: false,
	});


	const [formData, setFormData] = useState(initialState);

	// Use CustomHooks
	const [inputError, setError] = useValidateError();

	const handleChangeInput = useCallback((e) => {
		const { name, value } = e.target;
		setFormData((prev) => {
			return { ...prev, [name]: value };
		});
	}, []);

	const handleSubmitForm = async () => {
		const errors = setError(formData, pathname);
		const apiUrl = import.meta.env.VITE_API_DOMAIN;
		if(!state.isAgreeTheTerms) return toastError('Please accept Terms and Conditions to continue')
		if (Object.keys(errors).length === 0 && state.isAgreeTheTerms) {
			try {
				dispatch({ type: "LOADING" });
				const response = await fetch(
					`${apiUrl}/auth/${
						pathname === "/sign-up" ? "signup" : "signin"
					}`,
					{
						method: "POST",
						headers: {
							"Content-type": "application/json",
						},
						credentials: 'include',
						body: JSON.stringify(formData),
					}
				);
				setFormData(initialState);
				dispatch({ type: "LOADING" });
				if (response.status === 403) return toastError('User already exist!');
				if (response.status === 201) {
					toastSuccess("Registered successfully!");
					return navigate("/sign-in", {replace: true});
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<>
			<form className="mt-10 space-y-6">
				{pathname === "/sign-up" && (
					<div className="flex gap-2">
						<Input
							value={formData.firstName}
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
							value={formData.lastName}
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
				)}

				<Input
					value={formData.emailAddress}
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
					value={formData.password}
					type={state.showPassword ? "text" : "password"}
					startContent={<Icon icon="solar:lock-bold" />}
					name="password"
					label="Password"
					radius="sm"
					endContent={
						<Button
							isIconOnly
							variant="light"
							onClick={() => dispatch({type: 'PASSWORD'})} >
							<Icon
								icon={`solar:${
									state.showPassword
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
					value={formData.confirmPassword}
					type={state.showConfirmPassword ? "text" : "password"}
					startContent={<Icon icon="solar:lock-bold" />}
					name="confirmPassword"
					label="Confirm Password"
					radius="sm"
					endContent={
						<Button
							isIconOnly
							variant="light"
							onClick={() => dispatch({type: 'CONFIRM_PASSWORD'})}
						>
							<Icon
								icon={`solar:${
									state.showConfirmPassword
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
						<Checkbox onChange={() => dispatch({type: 'AGREE_TERMS'})}>I agree to the</Checkbox>{" "}
						<Link href="/" className="underline">
							Terms & Conditions
						</Link>
					</div>
				<div className="flex items-center justify-between">

					{pathname === "/sign-up" ? (
						<p>
							Already have an account?{" "}
							<Link href="/sign-in">Sign In</Link>
						</p>
					) : (
						<p>
							Don&apos;t have an account?{" "}
							<Link href="/sign-up">Sign Up</Link>
						</p>
					)}
					<Button
						className="px-10"
						color="primary"
						size="lg"
						onClick={handleSubmitForm}
						isLoading={state.isLoading}
						spinner={
							<Icon
								icon="ph:spinner-light"
								className="text-2xl animate-spin "
							/>
						}
					>
						{state.isLoading
							? "Loading"
							: `${
									pathname === "/sign-up"
										? "Register"
										: "Login"
							}`}
					</Button>
				</div>
			</form>
		</>
	);
}

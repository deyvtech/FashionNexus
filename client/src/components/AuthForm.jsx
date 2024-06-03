import { Button, Input, Checkbox, Link } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import useValidateError from "@/hooks/useValidateError";

export default function AuthForm() {
	const { pathname } = useLocation();
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

	const [formData, setFormData] = useState(initialState);

	// Use CustomHooks
	const [inputError, setError] = useValidateError();

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChangeInput = useCallback((e) => {
		const { name, value } = e.target;
		setFormData((prev) => {
			return { ...prev, [name]: value };
		});
	}, []);

	const handleSubmitForm = async () => {
		const errors = setError(formData)
		if (Object.keys(errors).length === 0) {

			try {
				setLoading(prev => !prev)
				const response = await fetch(
					`${import.meta.env.VITE_PUBLIC_API_DOMAIN_PROD}/api/auth/${pathname === "/sign-up" ? "signup" : "signin"
					}`,
					{
						method: "POST",
						headers: {
							"Content-type": "application/json",
						},
						body: JSON.stringify(formData),
					}
				);
				setFormData(initialState);
				const data = await response.json();
				setLoading(prev => !prev)

				console.log(data)
			} catch (error) {
				console.log(error);
			} 
		}
	};

	const handleToggleShowPassword = (setter) => {
		setter((prev) => !prev);
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
					type={showPassword ? "text" : "password"}
					startContent={<Icon icon="solar:lock-bold" />}
					name="password"
					label="Password"
					radius="sm"
					endContent={
						<Button
							isIconOnly
							variant="light"
							onClick={() =>
								handleToggleShowPassword(setShowPassword)
							}
						>
							<Icon
								icon={`solar:${
									showPassword
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
					type={showConfirmPassword ? "text" : "password"}
					startContent={<Icon icon="solar:lock-bold" />}
					name="confirmPassword"
					label="Confirm Password"
					radius="sm"
					endContent={
						<Button
							isIconOnly
							variant="light"
							onClick={() =>
								handleToggleShowPassword(setShowConfirmPassword)
							}
						>
							<Icon
								icon={`solar:${
									showConfirmPassword
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
					<Checkbox>I agree to the</Checkbox>{" "}
					<Link href="/" className="underline">
						Terms & Privacy
					</Link>
				</div>
				<div className="flex items-center justify-between">
					<Button
						className="px-10"
						color="primary"
						size="lg"
						onClick={handleSubmitForm}
						isLoading={loading}
					>
						{pathname === "/sign-up" ? "Register" : "Login"}
					</Button>
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
				</div>
			</form>
		</>
	);
}

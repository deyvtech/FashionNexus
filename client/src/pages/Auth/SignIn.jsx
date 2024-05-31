import { Button, Input, Checkbox, Link } from "@nextui-org/react";
import React from "react";
import { Icon } from "@iconify/react";
export default function SignIn() {
	return (
		<div className=" p-24 text-white w-[40%]">
			<h1 className="text-5xl font-semibold">Login your account</h1>
			<p className="mt-4 text-lg">
				Enter your credentials to login your account
			</p>
			<div className="my-10 flex justify-between">
				<Button
					href="/"
					as={Link}
					startContent={<Icon icon="logos:google-icon" />}
					variant="flat"
					size="lg"
					color="primary"
					className="text-white"
				>
					Sign in with Google
				</Button>
				<Button
					href="/"
					as={Link}
					startContent={<Icon icon="fa-brands:apple" />}
					variant="flat"
					size="lg"
					color="primary"
					className="text-white"
				>
					Sign in with Apple
				</Button>
			</div>
			<div className="flex justify-center mt-5 items-center gap-2">
				<span className="w-[50%] h-[1px] bg-fnAccent-900"></span>
				<p className="text-gray-500">or</p>
				<span className="w-[50%] h-[1px] bg-fnAccent-900"></span>
			</div>
			<form className="mt-10 space-y-6">

        <Input
          type="email"
					startContent={<Icon icon="solar:inbox-bold" />}
					name="email_address"
					label="Email Address"
					radius="sm"
				/>
        <Input
          type="password"
					startContent={<Icon icon="solar:lock-bold" />}
					name="password"
					label="Password"
					radius="sm"
					endContent={
						<Button isIconOnly variant="light">
							<Icon icon="solar:eye-bold" className="text-xl" />
						</Button>
					}
				/>
        <Input
          type="password"
					startContent={<Icon icon="solar:lock-bold" />}
					name="confirm_password"
					label="Confirm Password"
					radius="sm"
					endContent={
						<Button isIconOnly variant="light">
							<Icon
								icon="solar:eye-closed-bold"
								className="text-xl"
							/>
						</Button>
					}
				/>
				<div>
					<Checkbox>I agree to the</Checkbox>{" "}
					<Link href="/" className="underline">
						Terms & Privacy
					</Link>
				</div>
				<div className="flex items-center justify-between">
					<Button className="px-10" color="primary" size="lg">
						Register
          </Button>
          <p>Don't have an account? <Link href="/sign-up">Sign Up</Link></p>
				</div>
			</form>
		</div>
	);
}

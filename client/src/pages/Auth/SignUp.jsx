import { Button, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import AuthForm from "@/components/AuthForm";
export default function SignUp() {
	return (
		<div className=" py-24 pl-24 pr-12 text-white w-[40%]">
			<h1 className="text-4xl font-semibold">Create your account</h1>
			<p className="mt-4 text-md">
				Enter your credentials to create account
			</p>
			<div className="my-10 gap-6 flex justify-between">
				<Button
					href="/"
					as={Link}
					startContent={<Icon icon="logos:google-icon" />}
					variant="flat"
					size="lg"
					color="primary"
					className="text-white"
				>
					Sign up with Google
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
					Sign up with Apple
				</Button>
			</div>
			<div className="flex justify-center mt-5 items-center gap-2">
				<span className="w-[50%] h-[.5px] bg-fnAccent-900"></span>
				<p className="text-gray-500">or</p>
				<span className="w-[50%] h-[.5px] bg-fnAccent-900"></span>
			</div>
		<AuthForm />
		</div>
	);
}

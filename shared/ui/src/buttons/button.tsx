import { cm } from "../config/cn";

export function Button({ className, children, ...others }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button {...others} className={cm("flex items-center  justify-center gap-3  outline-none cursor-pointer p-4 rounded-sm  text-[1rem] w-full mx-auto bg-blue-700 border-green-500", className)}>
			{children}
			<span className="flex ml-4">ok</span>
		</button>
	);
}

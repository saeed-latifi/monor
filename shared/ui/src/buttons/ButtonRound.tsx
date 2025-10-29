import { cm } from "../config/cn";

// Button props

export function ButtonRound({ children, className, ...others }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button className={cm("rounded-full w-8 h-8 p-2 bg-amber-500 shadow-center fill-white text-white", className)} {...others}>
			{children}
		</button>
	);
}

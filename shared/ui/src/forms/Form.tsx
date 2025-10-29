import { FormHTMLAttributes } from "react";
import { cm } from "../config/cn";

export function Form({ className, ...others }: FormHTMLAttributes<HTMLFormElement>) {
	return (
		<div className="flex flex-col w-full flex-1 items-center ">
			<form {...others} className={cm("flex flex-col gap-4 w-full", className)} />
		</div>
	);
}

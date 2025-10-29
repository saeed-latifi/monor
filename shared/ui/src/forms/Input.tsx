import { CSSProperties, InputHTMLAttributes, ReactElement } from "react";
import { cm } from "../config/cn";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
	label?: string;
	errors?: string[];
	containerStyle?: CSSProperties;
	icon?: ReactElement;
}

export function Input({ label, errors, containerStyle, className, id, icon, value, ...others }: InputProps) {
	return (
		<div className="flex w-full flex-1 flex-col gap-2" style={containerStyle}>
			{label && (
				<label className="text-base font-bold px-2" htmlFor={id}>
					{label}
				</label>
			)}
			<label
				className={cm("w-full border bg-white px-4 py-2 rounded-xl flex items-center gap-2 focus-within:border-base", errors?.length ? "border-error" : "border-border", icon ? "pr-2" : "", className)}
			>
				{icon && <>{icon}</>}
				<input {...others} value={value ?? ""} className="min-w-0 flex-1 text-text" id={id} />
			</label>
			{errors?.map((e) => (
				<span className="text-error pr-2">{e}</span>
			))}
		</div>
	);
}

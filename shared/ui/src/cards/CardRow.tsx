import { ReactElement } from "react";

export function CardRow({ children }: { children: ReactElement }) {
	return (
		<div className="flex w-full gap-2 items-center select-none bg-white border border-border even:bg-gray-500 even:text-white font-peyda-bold px-3 py-1 rounded-md overflow-hidden flex-wrap">{children}</div>
	);
}

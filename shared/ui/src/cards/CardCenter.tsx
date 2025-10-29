import { ReactElement } from "react";

export function CardCenter(props: { children?: ReactElement }) {
	return <div className="flex flex-col flex-1 items-center justify-center w-full h-full gap-4 p-4">{props.children}</div>;
}

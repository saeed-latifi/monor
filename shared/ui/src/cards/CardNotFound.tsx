import { ReactElement } from "react";
import { CardCenter } from "./CardCenter";

export function CardNotFound({ messages, createFirst }: { messages: string[]; createFirst?: ReactElement }) {
	return (
		<CardCenter>
			<div className="flex flex-col gap-2 text-action fill-action items-center justify-center bg-white border border-border rounded-2xl p-8 font-peyda-bold">
				{messages.map((item, index) => (
					<p key={index}>{item}</p>
				))}
				{createFirst}
			</div>
		</CardCenter>
	);
}

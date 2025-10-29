import { CardCenter } from "./CardCenter";

export function CardNoAccess({ noAccess }: { noAccess: string[] }) {
	return (
		<CardCenter>
			<div className="flex flex-col gap-2 text-error fill-error items-center justify-center bg-white border border-border rounded-2xl p-8 font-peyda-bold">
				{noAccess.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</div>
		</CardCenter>
	);
}

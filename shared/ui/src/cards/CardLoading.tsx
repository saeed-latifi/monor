import { LoadingSpinner } from "../animations/LoadingSpinner";

export function CardLoading() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center w-full h-full gap-4 p-4">
			<LoadingSpinner className="w-7 h-7" />
		</div>
	);
}

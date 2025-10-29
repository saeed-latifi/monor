import { Test } from "./components/test";
import { digitFixer } from "@repo/utils/textFixer";
import { ButtonRound } from "@repo/ui/buttons/ButtonRound";

export default function Page() {
	return (
		<main className="flex flex-col items-center justify-between min-h-screen p-24">
			<Test />
			<p className="p-4 bg-emerald-300">{digitFixer("65a ش ۲۳۲۴")}</p>
			<ButtonRound>صثقصثق</ButtonRound>
		</main>
	);
}

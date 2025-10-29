import { ChangeEvent, TextareaHTMLAttributes, useState } from "react";

export function ChatTextarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
	const [content, setContent] = useState<string>("");

	function handleInput(e: ChangeEvent<HTMLTextAreaElement>) {
		setContent(e.target.value);
		e.target.style.height = "auto"; // Reset height
		const newHeight = Math.min(e.target.scrollHeight, 5 * 24); // 24px per row, max 5 rows
		e.target.style.height = `${newHeight}px`;
	}

	return (
		<textarea
			className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg resize-none overflow-y-auto"
			value={content}
			onChange={handleInput}
			placeholder="Type your message..."
			rows={1}
			style={{ maxHeight: "120px" }} // 5 rows * 24px
			{...props}
		/>
	);
}

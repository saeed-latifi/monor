import { ReactNode, useEffect, useRef, useState } from "react";

export type popupItemType = { id: number | string; onClick: () => void; title: ReactNode };
type propsType = { content: (popupItemType | undefined)[]; label: ReactNode; selected?: number | string; position: positionType; itemPadding: string; className?: string };
type positionType = { top?: number; bottom?: number; left?: number; right?: number };

export default function Popup({ content, label, selected, position, itemPadding, className: cl }: Readonly<propsType>) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (isOpen) setShow(true);
	}, [isOpen]);

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [wrapperRef]);

	function handleClickOutside(event: Event) {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target as any)) setShow(false);
	}

	return (
		<div ref={wrapperRef} className={`relative flex items-center z-[3] ${cl}`}>
			<div className="flex items-center justify-center w-full" onClick={() => !!content.length && (isOpen ? setShow(false) : setIsOpen(true))}>
				{label}
			</div>

			{!!isOpen && (
				<div
					style={{ top: position?.top, bottom: position?.bottom, left: position?.left, right: position?.right }}
					className={`absolute bg-background rounded-md border-base flex-col overflow-hidden w-max h-max transition-all duration-200 border
                            ${show ? "opacity-100 scale-100" : "opacity-10  scale-90"}`}
					onTransitionEnd={(e) => !show && e.propertyName === "opacity" && setIsOpen(false)}
				>
					{content.map((c) => {
						if (c) {
							return (
								<button
									key={c.id}
									className={`flex items-center w-full clicker select-none hover:bg-theme-popup-active active:opacity-80 clicker hover:bg-amber-100
												${itemPadding ?? ""} 
												${selected === c.id ? "bg-theme-secondary bg-opacity-40" : ""}
									`}
									onClick={() => {
										c.onClick();
										setShow(false);
									}}
								>
									{c.title}
								</button>
							);
						}
					})}
				</div>
			)}
		</div>
	);
}

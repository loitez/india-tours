import { SelectProps, Option } from "../../types";
import { useEffect, useRef, useState } from "react";

export const Select = ({
	options,
	placeholder = "Выберите значение",
	onChange,
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<Option | null>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Обработчик клика вне компонента
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Обработчик выбора опции
	const handleOptionClick = (option: Option) => {
		setSelectedOption(option);
		setIsOpen(false);
		if (onChange) {
			onChange(option.value);
		}
	};

	return (
		<div className="custom-select" ref={dropdownRef}>
			{/* Отображение выбранной опции или плейсхолдера */}
			<div
				className={`select-header ${isOpen ? "open" : ""}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				{selectedOption ? selectedOption.label : placeholder}
				<span className="arrow">{isOpen ? "▲" : "▼"}</span>
			</div>

			{/* Выпадающий список */}
			{isOpen && (
				<ul className="options-list">
					{options.map((option) => (
						<li
							key={option.value}
							className="option-item"
							onClick={() => handleOptionClick(option)}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

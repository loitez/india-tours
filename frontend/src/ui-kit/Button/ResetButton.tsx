import styles from "./Button.module.scss";
import { ButtonProps } from "../../types";
import { useFormikContext } from "formik";
import { noop } from "../../utils/noop.ts";

export const ResetButton = ({
	children,
	version = "default-btn",
	className,
	type,
	title,
	handleClick = noop,
}: ButtonProps) => {
	const classNames = [version, className, styles.button].filter(Boolean).join(" ");

	const { resetForm } = useFormikContext();

	const onClick = () => {
		resetForm();
		handleClick();
	};

	return (
		<button className={classNames} type={type} title={title} onClick={onClick}>
			{children}
		</button>
	);
};

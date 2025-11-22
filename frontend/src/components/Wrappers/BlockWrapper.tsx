import { DefaultProps } from "../../types/default.types.ts";
import styles from "./Wrappers.module.scss";

export const BlockWrapper = ({ children, className }: DefaultProps) => {
	const classNames = [className, styles.wrappers__image].filter(Boolean).join(" ");

	return <div className={classNames}>{children}</div>;
};

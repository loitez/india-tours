import styles from "./Sidebar.module.scss";
import { DefaultProps } from "../../types";

export const Sidebar = ({ children }: DefaultProps) => {
	return <div className={styles.sidebar}>{children}</div>;
};

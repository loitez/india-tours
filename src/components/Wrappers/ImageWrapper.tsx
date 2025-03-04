import styles from "./Wrappers.module.scss";
import {DefaultProps} from "../../types/default.types.ts";


export const ImageWrapper = ({children}: DefaultProps) => {
    return (
        <div className={styles.wrappers__image}>
            {children}
        </div>
    )
}
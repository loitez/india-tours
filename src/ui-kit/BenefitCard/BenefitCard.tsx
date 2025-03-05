import styles from './BenefitCard.module.scss'
import {DefaultProps} from "../../types/default.types.ts";

export const BenefitCard = ({children}: DefaultProps) => {
    return (
        <div className={styles.benefit__card}>{children}</div>
    )
}
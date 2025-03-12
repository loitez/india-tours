import styles from "./Benefit.module.scss";
import { BenefitProps } from "../../types/benefit.types.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../constants/icons.ts";

export const Benefit = ({ children, icon }: BenefitProps) => {
  console.log(iconMap[icon]);

  return (
    <div className={styles.benefit}>
      <FontAwesomeIcon icon={iconMap[icon]} />
      <div>{children}</div>
    </div>
  );
};

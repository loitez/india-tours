import styles from './Wrappers.module.scss'
import {wrappersMap} from "../../constants/wrappers.ts";
import {WrapperProps} from "../../types";


export const Wrapper = ({children, wrapperType = "block", className}: WrapperProps) => {
    const classNames = [className, wrappersMap[wrapperType], styles.wrapper].filter(Boolean).join(" ");

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}
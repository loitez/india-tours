import styles from './Tag.module.scss'
import {TagProps} from "../../types/tag.types.ts";
import {tagsMap} from "../../constants/tags.ts";

export const Tag = ({tag}: TagProps) => {
    const classNames = [tag, styles.tag].filter(Boolean).join(" ");

    return (
        <div className={classNames}>{tagsMap[tag]}</div>
    )
}
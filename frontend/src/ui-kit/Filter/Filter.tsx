import styles from "./Filter.module.scss";
import { Checkbox } from "../Checkbox";
import { FilterProps } from "../../types/filter.types.ts";
import { Text } from "../Text";

export const Filter = ({
  filter,
  title,
  onClick,
  courses,
  className,
}: FilterProps) => {
  const classNames = [className, styles.filter].filter(Boolean).join(" ");

  const filterCourse = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterTag = event.target.id; // получаем id чекбокса
    if (event.target.checked) {
      const filteredCourses = courses.filter(({ tags }) =>
        tags.find((tag) => tag === filterTag),
      );
      onClick(filteredCourses);
    } else {
      const unFilteredCourses = courses.filter(({ tags }) =>
        Object.keys(filter).some((value) => tags.includes(value)),
      );
      onClick(unFilteredCourses);
    }
  };

  return (
    <div className={classNames}>
      <Text weight="font-bold" className={styles.filter__title}>
        {title}
      </Text>
      <div className={styles.filter__group}>
        {Object.entries(filter).map(([key, value]) => (
          <Checkbox id={key} onChange={filterCourse}>
            {value}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

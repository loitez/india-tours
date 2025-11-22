import styles from "./Filter.module.scss";
import { Checkbox } from "../Checkbox";
import { FilterProps, FilterValues } from "../../types/filter.types.ts";
import { Text } from "../Text";
import { useFormikContext } from "formik";

export const Filter = ({
	filter,
	title,
	handleChangeCourses,
	className,
	allCourses,
}: FilterProps) => {
	const classNames = [className, styles.filter].filter(Boolean).join(" ");
	const { values } = useFormikContext<FilterValues>();

	const filterCourse = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = event.target;

		const newValues = { ...values, [name]: checked };

		const activeFilterNames = Object.keys(newValues).filter((key) => newValues[key]);

		handleChangeCourses(() => {
			if (activeFilterNames.length === 0) {
				return allCourses;
			}
			return allCourses.filter(({ tags }) =>
				activeFilterNames.every((tag) => tags.includes(tag)),
			);
		});
	};

	return (
		<div className={classNames}>
			<Text weight="font-bold" className={styles.filter__title}>
				{title}
			</Text>
			<div className={styles.filter__group}>
				{Object.entries(filter).map(([key, value]) => (
					<Checkbox id={key} onChange={filterCourse} name={key} key={key}>
						{value}
					</Checkbox>
				))}
			</div>
		</div>
	);
};

import { Header, Wrapper } from "../../components";
import { useParams } from "react-router-dom";
import { getCourse } from "../../api";
import { useEffect, useState } from "react";
import { type Course as CourseType } from "../../types";
import { Error } from "../../components";
import { Text } from "../../ui-kit";
import styles from "../Courses/Courses.module.scss";
import { normalizeText } from "../../utils/normalizeText.ts";

export const Course = () => {
	const params = useParams();
	const courseSlug = params.id ?? "";

	const [course, setCourse] = useState<CourseType>({} as CourseType);

	useEffect(() => {
		fetchCourse(courseSlug).then((_) =>
			setCourse({ ..._, description: normalizeText(_.description) }),
		);
	}, [courseSlug]);

	console.log(course);

	return (
		<>
			<Header />
			{course ? (
				<>
					<Text size="text-h1" weight="font-bold">
						{course.title}
					</Text>
					<Wrapper wrapperType="image" className={styles.courses__card_image}>
						<img src={`./src/assets/${course.img_name}`} alt="Course image" />
					</Wrapper>
					<p>{course.description}</p>
				</>
			) : (
				<Error />
			)}
		</>
	);
};

const fetchCourse = async (slug: string): Promise<CourseType> => getCourse(slug);

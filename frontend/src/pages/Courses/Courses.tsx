import styles from './Courses.module.scss';
import { Error, Header, Sidebar, SortPanel, Wrapper } from '../../components';
import { useEffect, useState } from 'react';
import { Button, Card, Filter, Tag, Text } from '../../ui-kit';
import { Link } from 'react-router-dom';
import { truncateTextWithEllipsis } from '../../utils';
import { formatFilter, forWhomFilter } from '../../constants/filters.ts';
import { Course } from '../../types';
import { getCourses } from '../../api';
import { Form, Formik } from 'formik';

const MOCK_COURSES = [
	{
		id: 1,
		title: 'Алфавит хинди',
		description: 'Начни свой путь в мир хинди с первой буквы!',
		image: 'alphabet-course.jpg',
		tags: ['beginner', 'online'],
		slug: 'hindi-alphabet',
	},
	{
		id: 2,
		title: 'Намасте и прочие приветствия',
		description: 'Сделайте первое впечатление незабываемым — заговорите на хинди!',
		image: 'greetings-course.jpg',
		tags: ['beginner', 'online'],
		slug: 'namaste-and-other-greetings',
	},
	{
		id: 3,
		title: 'Читаем и пишем рецепты на хинди',
		description: 'Погрузитесь в гастрономическую культуру Индии через язык!',
		image: 'cooking-course.png',
		tags: ['intermediate', 'offline'],
		slug: 'read-and-write-recipes-on-hindi',
	},
];

export const Courses = () => {
	const [courses, setCourses] = useState<Course[]>([]);
	const [allCourses, setAllCourses] = useState<Course[]>([]);

	useEffect(() => {
		fetchCourses().then((_) => {
			setAllCourses(_);
			setCourses(_);
		});
	}, []);

	const clearFilters = () => {
		setCourses(allCourses);
	};

	const filterInitialValues = Object.fromEntries(
		Object.keys({ ...formatFilter, ...forWhomFilter }).map((key) => [key, false]),
	);

	console.log(filterInitialValues);

	return (
		<>
			<Header></Header>
			<div>
				<Text size="text-h1" weight="font-bold">
					Список доступных курсов
				</Text>
				<SortPanel items={courses} onSortClick={setCourses} />
				<div className={styles.courses}>
					<Sidebar>
						<Formik
							onSubmit={(values) => console.log(values)}
							initialValues={filterInitialValues}
						>
							<Form>
								<Filter
									className={styles.courses__sidebar_filter}
									filter={forWhomFilter}
									title="Для кого курс:"
									onClick={setCourses}
									courses={courses}
									allCourses={allCourses}
								/>
								<Filter
									className={styles.courses__sidebar_filter}
									filter={formatFilter}
									title="Формат курса:"
									onClick={setCourses}
									courses={courses}
									allCourses={allCourses}
								/>
								<Button
									className={styles.courses__sidebar_button}
									version="outlined-btn"
									onClick={clearFilters}
								>
									Сбросить фильтр
								</Button>
							</Form>
						</Formik>
					</Sidebar>
					{courses.length ? (
						<div className={styles.courses__wrapper}>
							{courses.map(
								({ id, img_name, title, description, tags, slug }) => (
									<Link to={`/courses/${slug}`} key={id}>
										<Card
											key={id}
											version="orange-card"
											className={styles.courses__wrapper_card}
										>
											<Wrapper
												wrapperType="image"
												className={
													styles.courses__wrapper_card_image
												}
											>
												<img
													src={`./src/assets/${img_name}`}
													alt="Course image"
												/>
											</Wrapper>
											<div
												className={
													styles.courses__wrapper_card_text
												}
											>
												<Text
													size="text-h2"
													weight="font-bold"
													className={
														styles.courses__wrapper_card_title
													}
												>
													{title}
												</Text>
												<div
													className={
														styles.courses__wrapper_card_desc
													}
												>
													{truncateTextWithEllipsis(
														description ?? '',
														120,
													)}
												</div>
												<div
													className={
														styles.courses__wrapper_card_tags
													}
												>
													{tags.map((tag, index) => (
														<Tag key={index} tag={tag} />
													))}
												</div>
											</div>
										</Card>
									</Link>
								),
							)}{' '}
						</div>
					) : (
						<Error error="404" showToMainButton={false} />
					)}
				</div>
			</div>
		</>
	);
};

const fetchCourses = async () => {
	try {
		return await getCourses();
	} catch (error) {
		console.error('Ошибка при получении списка курсов: ', error);
	}
};

import styles from './Courses.module.scss'
import {Header, Wrapper} from "../../components";
import {useState} from "react";
import {Card, Tag, Text} from "../../ui-kit";
import {Link} from "react-router-dom";

const MOCK_COURSES = [
    {
        id: 1,
        title: 'Алфавит хинди',
        description: 'Начни свой путь в мир хинди с первой буквы!',
        image: 'alphabet-course.jpg',
        tags: ['beginner', 'online'],
        slug: "hindi-alphabet"
    },
    {
        id: 2,
        title: 'Намасте и прочие приветствия',
        description: 'Сделайте первое впечатление незабываемым — заговорите на хинди!',
        image: 'greetings-course.jpg',
        tags: ['beginner', 'online'],
        slug: "namaste-and-other-greetings"
    },
    {
        id: 3,
        title: 'Читаем и пишем рецепты на хинди',
        description: 'Погрузитесь в гастрономическую культуру Индии через язык!',
        image: 'cooking-course.png',
        tags: ['intermediate', 'offline'],
        slug: "read-and-write-recipes-on-hindi"
    }

]

export const Courses = () => {
    const [coursesList, setCoursesList] = useState(MOCK_COURSES);

    return (
    <>
      <Header></Header>
        <div>
            <Text size="text-h1" weight="font-bold">Список доступных курсов</Text>
           <div className={styles.courses}>
               {coursesList.map(({id, image, title, description, tags, slug}, index) => (
                   <Link to={`/courses/${slug}`}>
                       <Card key={id} version="orange-card" className={styles.courses__card}>
                           <Wrapper wrapperType="image" className={styles.courses__card_image}>
                               <img src={`./src/assets/${image}`} alt="Course image"/>
                           </Wrapper>
                           <div className={styles.courses__card_text}>
                               <Text size="text-h2" weight="font-bold" className={styles.courses__card_title}>{title}</Text>
                               <div className={styles.courses__card_desc}>{description}</div>
                               <div className={styles.courses__card_tags}>
                                   {tags.map((tag, index) => (
                                       <Tag key={index} tag={tag}/>
                                   ))}
                               </div>

                           </div>

                       </Card>
                   </Link>

               ))
               }
           </div>
        </div>
    </>
    );
};

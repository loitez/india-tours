import styles from "./Banner.module.scss";
import { Benefit, Button, Checkbox, Input, Text } from "../../ui-kit";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__text}>
        <Text size="text-s" style="text-italic">
          Намасте, друзья!
        </Text>
        <Text size="text-h1" weight="font-bold" layout="text-block">
          Ваш репетитор по&nbsp;хинди
        </Text>
        <Benefit icon="user">
          Подбор программы обучения в&nbsp;зависимости от&nbsp;уровня и&nbsp;целей ученика
        </Benefit>
        <Benefit icon="puzzle">
          Игровые методики и&nbsp;увлекательные задания, направленные на&nbsp;изучение
          языка в&nbsp;дружелюбной атмосфере
        </Benefit>
        <Benefit icon="laptop">
          Удобные занятия через видеосвязь, которые позволяют учиться в&nbsp;любое
          время и&nbsp;в&nbsp;любом месте
        </Benefit>
      </div>
      <div className={styles.banner__form}>
        <Text className={styles.banner__form_title} size="text-h3" layout="text-block" align="text-center">
          Запишитесь на консультацию
        </Text>
        <form className={styles.banner__form_inputs} action="">
          <Input name="name" placeholder="Имя" />
          <Input name="phone" placeholder="+7(___)___-__-__" />
          <Input name="email" placeholder="your@email.ru" />
          <Button className={styles.banner__form_btn} version="secondary-btn" type="submit">
            Хочу на консультацию
          </Button>
          <Checkbox id="lead-form-agreement">
            Я согласен на обработку персональных данных
          </Checkbox>
        </form>
      </div>
    </div>
  );
};

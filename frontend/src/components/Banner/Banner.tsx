import styles from "./Banner.module.scss";
import { Benefit, Button, Checkbox, Input, Text } from "../../ui-kit";
import {FormEvent} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ConsultForm} from "../Forms";

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
      <ConsultForm/>

    </div>
  );
};

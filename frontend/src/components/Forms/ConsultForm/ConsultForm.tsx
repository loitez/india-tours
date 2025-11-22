import styles from "../Form.module.scss";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, Checkbox, Text} from "../../../ui-kit";
import * as Yup from 'yup'
import {CyrillicSymbolsRegExp} from "../../../constants/regExp.ts";

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Неверный email')
        .required('Обязательное поле'),
    phone: Yup.string()
        .required('Обязательное поле'),
    name: Yup.string()
        .matches(CyrillicSymbolsRegExp, "Введите имя на кириллице")
        .min( 2, "Введите не менее 2 символов")
        .required('Обязательное поле'),
    agreement: Yup.boolean()
        .oneOf([true], 'Обязательное поле'),
});

export const ConsultForm = () => {

    const handleSubmit = () => {

    }

    return (
        <div className={styles.form}>
            <Text className={styles.form_title} size="text-h3" layout="text-block" align="text-center">
                Запишитесь на консультацию
            </Text>
            <Formik  onSubmit={handleSubmit} initialValues={{
                name: "", phone: "", email: "", agreement: false
            }} validationSchema={validationSchema}>
                <Form className={styles.form_inputs}>
                    <div className={styles.form_input}>
                        <Field
                            type="name"
                            name="name"
                            className="form-control"
                            placeholder="Имя"
                        />
                        <div className={styles.form_error}>
                            <ErrorMessage
                                component="div"
                                name="name"
                            />
                        </div>
                    </div>
                    <div className={styles.form_input}>
                        <Field
                            type="phone"
                            name="phone"
                            className="form-control"
                            placeholder="+7(___)___-__-__"
                        />
                        <div className={styles.form_error}>
                            <ErrorMessage name="phone" component="div" className="error" />
                        </div>
                    </div>
                    <div className={styles.form_input}>
                        <Field
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="your@email.ru"
                        />
                        <div className={styles.form_error}>
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                    </div>
                    <div className={styles.form_input}>
                        <Checkbox name="agreement" id="consult-form-agreement">Я согласен на обработку персональных данных</Checkbox>
                        <div className={styles.form_error}>
                            <ErrorMessage name="agreement" component="div" className="error" />
                        </div>
                    </div>

                    <Button className={styles.banner__form_btn} version="secondary-btn" type="submit">
                        Хочу на консультацию
                    </Button>

                </Form>
            </Formik>
        </div>

    )
}
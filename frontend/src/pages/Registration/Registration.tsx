import {Header} from "../../components";
import styles from "../Authorization/Authorization.module.scss";
import {Button, Input, Text} from "../../ui-kit";
import {Link} from "react-router-dom";

export const Registration = () => {
    return (
        <>
            <Header/>
            <div className={styles.authorization}>
                <Text size="text-h1" layout="text-block" align="text-center">Зарегистрироваться</Text>
                <form action="" className={styles.authorization__form}>
                    <Input name="name" placeholder="Логин"></Input>
                    <Input name="password" placeholder="Пароль"></Input>
                    <Input name="password" placeholder="Повторите пароль"></Input>
                    <Button>Зарегистрироваться</Button>
                </form>
                <Text size="text-s" layout="text-block" align="text-center">Уже есть аккаунт? <Link
                    to="/login">Войти</Link></Text>
            </div>
        </>
    )
}
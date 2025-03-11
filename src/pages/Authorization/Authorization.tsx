import styles from './Authorization.module.scss'
import {Header} from "../../components";
import {Button, Input, Text} from '../../ui-kit'
import {Link} from "react-router-dom";

export const Authorization = () => {
    return (
        <>
            <Header/>
            <div className={styles.authorization}>
                <Text size="text-h1" layout="text-block" align="text-center">Войти в личный кабинет</Text>
                <form action="" className={styles.authorization__form}>
                    <Input name="name" placeholder="Логин"></Input>
                    <Input name="password" placeholder="Пароль"></Input>
                    <Button>Войти</Button>
                </form>
                <Text size="text-s" layout="text-block" align="text-center">Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></Text>
            </div>

        </>
    )
}
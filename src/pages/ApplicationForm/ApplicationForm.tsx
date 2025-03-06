import styles from './ApplicationForm.module.scss'
import {Input, Text} from "../../ui-kit";
import {Header, Wrapper} from "../../components";

export const ApplicationForm = () => {
    return (
        <div>
            <Header/>
            <Wrapper wrapperType="block" className={styles.applicationForm}>
                <Text size="text-h1" weight="font-bold" layout="text-block" align="text-center">Запись на занятие</Text>
                <form action="">
                    <Input name="name" placeholder="Имя"></Input>
                </form>
            </Wrapper>
        </div>
    )
}
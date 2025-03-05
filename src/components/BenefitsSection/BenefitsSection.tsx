import styles from './BenefitsSection.module.scss'
import {Benefit, BenefitCard, Text} from "../../ui-kit";
import {Wrapper} from "../Wrappers";

export const BenefitsSection = () => {
    return (
        <Wrapper wrapperType="block">
            <Text size="text-h1" weight="font-bold" align="text-center" layout="text-block">Преимущества индивидуальных занятий</Text>
            <div className={styles.benefits__section}>
                <BenefitCard>
                    <Benefit icon="bulb">Интерактивная платформа Взнания</Benefit>
                </BenefitCard>
                <BenefitCard>
                    <Benefit icon="folder">Личная папка в облаке</Benefit>
                </BenefitCard>
                <BenefitCard>
                    <Benefit icon="pen">Домашнее задание на платформе</Benefit>
                </BenefitCard>
                <BenefitCard>
                    <Benefit icon="book">Индивидуальный подбор материалов</Benefit>
                </BenefitCard>
            </div>
        </Wrapper>
    )
}
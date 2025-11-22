import styles from "./BenefitsSection.module.scss";
import { Benefit, Card, Text } from "../../ui-kit";
import { Wrapper } from "../Wrappers";

export const BenefitsSection = () => {
	return (
		<Wrapper wrapperType="block">
			<Text
				size="text-h1"
				weight="font-bold"
				align="text-center"
				layout="text-block"
			>
				Преимущества индивидуальных занятий
			</Text>
			<div className={styles.benefits__section}>
				<Card>
					<Benefit icon="bulb">Интерактивная платформа Взнания</Benefit>
				</Card>
				<Card>
					<Benefit icon="folder">Личная папка в облаке</Benefit>
				</Card>
				<Card>
					<Benefit icon="pen">Домашнее задание на платформе</Benefit>
				</Card>
				<Card>
					<Benefit icon="book">Индивидуальный подбор материалов</Benefit>
				</Card>
			</div>
		</Wrapper>
	);
};

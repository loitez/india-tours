import styles from './Error.module.scss';
import { Button, Text } from '../../ui-kit';
import { Wrapper } from '../Wrappers';
import { Link } from 'react-router-dom';
import { ErrorProps, errorTypes, ErrorTypes } from '../../types/error.types.ts';

const errorMessage: Record<errorTypes, string> = {
	'404': 'Ничего не нашлось :(',
	'500': 'Что-то сломалось, уже чиним!',
	default: 'Что-то пошло не так :(',
};

export const Error = ({ error = 'default', showToMainButton = true }: ErrorProps) => {
	return (
		<Wrapper wrapperType="block" className={styles.error}>
			<Wrapper wrapperType="image" className={styles.error__image}>
				<img src="src/assets/images/error.jpg" alt="Ошибка" />
			</Wrapper>
			<Text size="text-s" align="text-center" layout="text-block">
				Упс! {errorMessage[error]}
			</Text>
			{showToMainButton && (
				<Link to="/">
					<Button version="primary-btn">Вернуться на главную</Button>
				</Link>
			)}
		</Wrapper>
	);
};

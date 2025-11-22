import styles from './Card.module.scss';
import { CardProps } from '../../types';

export const Card = ({ children, version = 'white-card', className }: CardProps) => {
	const classNames = [version, className, styles.card].filter(Boolean).join(' ');

	return <div className={classNames}>{children}</div>;
};

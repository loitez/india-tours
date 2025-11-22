import styles from './Benefit.module.scss';
import { BenefitProps } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconMap } from '../../constants/icons.ts';

export const Benefit = ({ children, icon, className }: BenefitProps) => {
	console.log(iconMap[icon]);

	const classNames = [styles.benefit, className].filter(Boolean).join(' ');

	return (
		<div className={classNames}>
			<FontAwesomeIcon icon={iconMap[icon]} />
			<div>{children}</div>
		</div>
	);
};

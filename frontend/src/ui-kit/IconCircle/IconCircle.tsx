import styles from './IconCircle.module.scss';
import { iconMap } from '../../constants/icons.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from '../../types';

export const IconCircle = ({ icon, size, color }: IconProps) => (
	<div className={styles.icon_circle}>
		<FontAwesomeIcon icon={iconMap[icon]} size={size} color={color} />
	</div>
);

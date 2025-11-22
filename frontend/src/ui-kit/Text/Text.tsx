import { TextTypesProps } from '../../types';
import styles from './Text.module.scss';

export const Text = ({
	size = 'text-s',
	weight = 'font-normal',
	layout = 'text-inline',
	align,
	style,
	color,
	children,
	className,
}: TextTypesProps) => {
	const classNames = [size, weight, layout, align, style, color, className, styles.text]
		.filter(Boolean)
		.join(' ');

	return <span className={classNames}>{children}</span>;
};

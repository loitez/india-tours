import styles from './SortPanel.module.scss';
import { Benefit, Button } from '../../ui-kit';
import { useState } from 'react';
import { SortPanelProps } from '../../types';

const AlphabetTextSort: Record<string, string> = {
	true: 'Название: А-Я',
	false: 'Название: Я-А',
};

const AlphabetIconSort: Record<string, string> = {
	true: 'alphabet',
	false: 'nonAlphabet',
};

export const SortPanel = <T extends { title: string }>({
	items,
	onSortClick,
}: SortPanelProps<T>) => {
	const [alphabetSort, setAlphabetSort] = useState<boolean>(false);

	const onAlphabetSortButtonClick = () => {
		const sortedItems = [...items].sort((a, b) => {
			return alphabetSort
				? b.title.localeCompare(a.title)
				: a.title.localeCompare(b.title);
		});
		setAlphabetSort(!alphabetSort);
		onSortClick(sortedItems);
	};

	return (
		<div className={styles.sort}>
			<Button version="invisible" onClick={onAlphabetSortButtonClick}>
				<Benefit
					icon={AlphabetIconSort[String(alphabetSort)]}
					className={styles.sort__item}
				>
					{AlphabetTextSort[String(alphabetSort)]}
				</Benefit>
			</Button>
		</div>
	);
};

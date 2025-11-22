import styles from './RssFeed.module.scss';
import { useEffect, useState } from 'react';
import { Card, Loader } from '../../ui-kit';
import { Wrapper } from '../Wrappers';
import { type Post } from '../../types';
import { normalizePost } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { getRssFeed } from '../../api';
import { AppDispatch, RootState } from '../../store.ts';
import { Error } from '../Error';

export const RssFeed = () => {
	const [items, setItems] = useState([]);
	const isLoading = useSelector((state: RootState) => state.loader.isLoading);

	const dispatch = useDispatch<AppDispatch>();
	const { feed, status, error } = useSelector((state: RootState) => state.rss);

	useEffect(() => {
		dispatch(getRssFeed());
	}, [dispatch]);

	if (isLoading) {
		return <Loader />;
	}

	if (status === 'failed') {
		return <Error error="500" />;
	}

	return (
		<div className={styles.RssFeed}>
			{items.length ? (
				<>
					<h2>Посты из Telegram-канала</h2>
					<div className={styles.RssFeed__container}>
						{items.map((item: Post, index) => (
							<Card
								key={index}
								className={styles.RssFeed__item}
								version="green-card"
							>
								{item.image && (
									<Wrapper
										wrapperType="image"
										className={styles.RssFeed__item_image}
									>
										<img src={item.image} alt="" />
									</Wrapper>
								)}
								<div className={styles.RssFeed__item_text}>
									<h3 className={styles.RssFeed__item_title}>
										{item.title}
									</h3>
									<p
										className={styles.RssFeed__item_content}
										dangerouslySetInnerHTML={{
											__html: item.preview || item.content,
										}}
									/>
									<a
										href="t.me/hindilain"
										target="_blank"
										rel="noopener noreferrer"
									>
										Читать в оригинале
									</a>
								</div>
							</Card>
						))}
					</div>
				</>
			) : (
				<Error error="404" />
			)}
		</div>
	);
};

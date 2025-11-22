import styles from './Swiper.module.scss';

export const SwiperCard = ({ children }) => {
	return <div className={styles.swiper__card}>{children}</div>;
};

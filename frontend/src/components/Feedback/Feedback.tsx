import styles from "./Feedback.module.scss";
import { useFeedback } from "../../hooks/useFeedback.ts";
import { Card, Swiper, Text } from "../../ui-kit";

export const Feedback = () => {
	const feedback = useFeedback();

	return (
		<div className={styles.feedback}>
			<Swiper slides={feedback}></Swiper>
		</div>
	);
};

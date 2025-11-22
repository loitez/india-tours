import {getFeedback} from "../api";
import {useEffect, useState} from "react";
import {Feedback} from "../types";


export const useFeedback = (): Feedback[] => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const feedbackData = await getFeedback();
                setFeedback(feedbackData);
            }
            catch (error) {
                console.error('Ошибка при получении отзывов: ', error)
            }
        }

        fetchFeedback()
    }, []);

    return feedback
}
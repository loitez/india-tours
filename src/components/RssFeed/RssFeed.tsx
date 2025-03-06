import styles from './RssFeed.module.scss'
import { useEffect, useState } from "react";
import {Benefit, BenefitCard, Card} from "../../ui-kit";

type Post = {
    title: string,
    content: string,
    link: string
}

export interface IRssFeed {
    posts: Post[]
}

export const RssFeed = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRssFeed = async () => {
            try {
                // const parser = new RSSParser();
                const feedUrl = "http://localhost:5000/api/rss";

                const response = await fetch(feedUrl, {
                    method: 'GET',
                    headers: {
                        Accept: "application/json"
                    }
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                console.log(response)
                const data = await response.json();

                // const feed = await parse(feedUrl);
                console.log(data)

                // Получаем список постов из ленты
                const feed = data.filter((post: Post) => post.content !== 'Без текста')
                setItems(feed);
                setLoading(false);
            } catch (err) {
                console.error("Ошибка при загрузке RSS:", err);
                setError("Не удалось загрузить RSS-ленту");
                setLoading(false);
            }
        };

        fetchRssFeed();
    }, []);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={styles.RssFeed}>
            <h2>Посты из Telegram-канала</h2>
            <div className={styles.RssFeed__container}>
                {items.map((item: Post, index) => (
                    <Card key={index} className={styles.RssFeed__item}>
                        <h3 className={styles.RssFeed__item_title}>Пост</h3>
                        <p className={styles.RssFeed__item_content} dangerouslySetInnerHTML={{ __html: item.content }} />
                        <a href="t.me/hindilain" target="_blank" rel="noopener noreferrer">
                            Читать в оригинале
                        </a>
                    </Card>
                ))}
            </div>
        </div>
    );
};

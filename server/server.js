import express from "express";
import axios from "axios";
import cors from "cors";
import { load } from "cheerio"

const app = express();
app.use(cors());

function parseRssItems(html) {
    // Здесь должен быть код для парсинга HTML в JSON
    return [
        { title: "Заголовок поста", description: "Описание поста", link: "https://example.com" },
        { title: "Другой пост", description: "Описание другого поста", link: "https://example.com/another" },
    ];
}

// Эндпоинт для получения RSS-ленты
app.get("/api/rss", async (req, res) => {

    try {
        const feedUrl = "https://t.me/s/hindilain"; // URL вашего канала
        const response = await axios.get(feedUrl, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
            },
        });

        //const data = { items: parseRssItems(response.data) };

        const $ = load(response.data);
        const posts = [];
        $(".tgme_widget_message").each((index, element) => {
            const $post = $(element);

            // Получаем заголовок поста
            const title = $post.find(".tgme_widget_message_title a").text().trim();

            // Получаем текст поста
            const content = $post
                .find(".tgme_widget_message_text")
                .html()
               ?.replace(/<br\s*\/?>/g, "\n") // Заменяем <br> на перенос строки*/
                ?.replace(/<tg-emoji\b[^>]*>.*?<\/tg-emoji>/gis, "")
                ?.replace(/<b>/g, '')
                ?.replace(/<\/b>/g, '')
                ?.replace(/<a\b[^>]*>/gis, "")
                ?.replace(/<\/a>/g, '')
                ?.trim() || "Без текста";

            // Получаем ссылку на пост
            const link = $post.find(".tgme_widget_message_date a").attr("href");

            const imageElement = $post.find(".tgme_widget_message_photo_wrap");
            let imageUrl = null;
            if (imageElement.length > 0) {
                const style = imageElement.attr("style") || "";
                const match = style.match(/url\(['"]?(.*?)['"]?\)/);
                if (match && match[1]) {
                    imageUrl = match[1]; // Извлекаем URL изображения
                }
            }

            // Добавляем пост в массив
            posts.push({
                title: title || "Без заголовка",
                content,
                image: imageUrl,
                link: link || "#",
            });
        });

        res.send(posts);
    } catch (error) {
        console.error("Ошибка при получении RSS:", error);
        res.status(500).send("Не удалось загрузить RSS-ленту");
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Прокси-сервер запущен на порту ${PORT}`);
});
import { type Post } from "../types";

const MAX_PREVIEW_TEXT_LENGTH = 200;

export const normalizePost = (post: Post): Post => {
  const normalizedContent = post.content.replace(/\n\n/g, "<br>");
  const preview = post.content;
  return {
    ...post,
    content: normalizedContent,
    title: findFirstSentence(normalizedContent),
    preview: truncateTextWithEllipsis(
      normalizedContent,
      MAX_PREVIEW_TEXT_LENGTH,
    ),
  };
};

export const truncateTextWithEllipsis = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const findFirstSentence = (text: string) => {
  const match = text.match(/^(.*?[.!?](?=\s|$))/);
  /*return match ? match[0].trim() : text.trim();*/
  const parts = text.split(/<br\s*\/?>/i); // Разделяем по <br>

  if (match) {
    console.log("match");
    return match[0].trim();
  }

  if (parts.length > 0) {
    return parts[0].trim();
  }

  return text.trim();
};

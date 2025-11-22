import {tagsMap} from "./tags.ts";

type TagsMapKeys = keyof typeof tagsMap;
type TagsMapValues = typeof tagsMap[TagsMapKeys];

export const forWhomFilter: Record<TagsMapKeys, TagsMapValues> = {
    beginner: "Для начинающих",
    intermediate: "Для продолжающих",
};

export const formatFilter: Record<TagsMapKeys, TagsMapValues> = {
    online: "Онлайн",
    offline: "Офлайн"
};
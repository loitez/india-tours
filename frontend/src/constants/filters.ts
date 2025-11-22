import { tagsMap } from "./tags.ts";

export type TagsMapKeys = keyof typeof tagsMap;
export type TagsMapValues = (typeof tagsMap)[TagsMapKeys];

export const forWhomFilter: Record<TagsMapKeys, TagsMapValues> = {
	beginner: "Для начинающих",
	intermediate: "Для продолжающих",
};

export const formatFilter: Record<TagsMapKeys, TagsMapValues> = {
	online: "Онлайн",
	offline: "Офлайн",
};

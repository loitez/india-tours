import { formatFilter, forWhomFilter, TagsMapKeys } from "../constants/filters.ts";
import { Course } from "./course.types.ts";
import React from "react";
import { DefaultProps } from "./default.types.ts";

export interface FilterProps extends DefaultProps {
	filter: typeof forWhomFilter | typeof formatFilter;
	title: string;
	handleChangeCourses: React.Dispatch<React.SetStateAction<Course[]>>;
	allCourses: Course[];
}

export type FilterValues = Record<TagsMapKeys, boolean>;

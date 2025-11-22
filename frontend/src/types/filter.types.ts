import {formatFilter, forWhomFilter} from "../constants/filters.ts";
import {Course} from "./course.types.ts";
import React from "react";
import {DefaultProps} from "./default.types.ts";

export interface FilterProps extends DefaultProps {
    filter: typeof forWhomFilter | typeof formatFilter,
    title: string;
    onClick: React.Dispatch<React.SetStateAction<Course[]>>;
    courses: Course[]
    allCourses: Course[]
}
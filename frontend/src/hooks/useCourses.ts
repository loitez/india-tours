import {getCourses} from "../api";
import {useEffect, useState} from "react";
import {Course} from "../types";


export const useCourses = (): Course[] => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {


        fetchCourses()
    }, []);

    return courses
}
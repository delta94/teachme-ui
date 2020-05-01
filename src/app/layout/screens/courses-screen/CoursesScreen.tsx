import React, { useState } from "react";
import { IListItem } from "../../../components/list/list-item/ListItem";
import CoursesListScreen from "./courses-list-screen/CoursesListScreen";
import { ICourse, CourseState, ICourseData } from "./courses.interface";
import { parseToCourseListItems, getCourseById } from "./coursesUtils";
import CourseScreen from "./course-screen/CourseScreen";

import "../../../../styles/screens/courses-screen/courses-screen.less";

export const courses: ICourse[] = [
  {
    id: "user-management",
    title: "User Management",
    media: {
      thumbnail: {
        ratio_1_1: "https://picsum.photos/200/200",
        ratio_2_1: "https://picsum.photos/310/140",
      },
    },
    lessons: [
      {
        id: "first-lesson",
      },
    ],
  },
  {
    id: "system-introduction",
    title: "System Introduction",
    media: {
      thumbnail: {
        ratio_1_1: "https://picsum.photos/200/200",
        ratio_2_1: "https://picsum.photos/310/140",
      },
    },
    data: {
      state: CourseState.Started,
      status: 20,
    },
    lessons: [
      {
        id: "first-lesson",
      },
    ],
  },
  {
    id: "profile-and-settings",
    title: "Profile and Settings",
    media: {
      thumbnail: {
        ratio_1_1: "https://picsum.photos/200/200",
        ratio_2_1: "https://picsum.photos/310/140",
      },
    },
    data: {
      state: CourseState.Completed,
      status: 80,
    },
    lessons: [
      {
        id: "first-lesson",
      },
    ],
  },
  {
    id: "all-things-template",
    title: "All Thing Template",
    media: {
      thumbnail: {
        ratio_1_1: "https://picsum.photos/200/200",
        ratio_2_1: "https://picsum.photos/310/140",
      },
    },
    data: {
      state: CourseState.Tested,
      status: 100,
    },
    lessons: [
      {
        id: "first-lesson",
      },
    ],
  },
];

export default function CoursesScreen() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const coursesListItems = parseToCourseListItems(courses);

  const onSelectedCourse = (selected: IListItem<ICourseData>) => {
    const selectedCourse = getCourseById(selected.id);
    setSelectedCourse(selectedCourse);
  };

  return selectedCourse ? (
    <CourseScreen course={selectedCourse} />
  ) : (
    <CoursesListScreen
      courses={coursesListItems as IListItem<ICourseData>[]}
      onSelectedCourse={onSelectedCourse}
    />
  );
}

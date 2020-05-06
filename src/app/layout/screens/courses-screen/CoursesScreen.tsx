import React from "react";
import { Switch, Route } from "react-router-dom";

import { ICourse, CourseState } from "./courses.interface";

import CoursesListScreen from "./courses-list-screen/CoursesListScreen";
import CourseScreen from "./course-screen/CourseScreen";
import { Icon } from "../../../hooks/useIconManager";

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
    quiz: {
      id: "user-management",
      title: "Course Assessment",
      link: "/quiz/user-management",
      media: {
        thumbnail: {
          ratio_1_1: "https://picsum.photos/200/200",
          ratio_2_1: "https://picsum.photos/310/140",
        },
      },
    },
  },
];

export default function CoursesScreen() {
  return (
    <Switch>
      <Route exact path="/" component={CoursesListScreen} />
      <Route path="/course/:courseId" component={CourseScreen} />
    </Switch>
  );
}

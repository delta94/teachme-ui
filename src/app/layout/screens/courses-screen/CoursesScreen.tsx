import React from "react";
import { Switch, Route } from "react-router-dom";

import CoursesListScreen from "./courses-list-screen/CoursesListScreen";
import CourseScreen from "./course-screen/CourseScreen";

export default function CoursesScreen() {
  return (
    <Switch>
      <Route exact path="/" component={CoursesListScreen} />
      <Route path="/course/:courseId/:taskId?" component={CourseScreen} />
    </Switch>
  );
}

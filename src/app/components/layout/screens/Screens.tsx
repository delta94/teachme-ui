import React from "react";
import { Switch, Route } from "react-router-dom";

import CoursesListScreen from "./courses-screen/courses-list-screen/CoursesListScreen";
import CourseScreen from "./courses-screen/course-screen/CourseScreen";
import QuizScreen from "./courses-screen/quiz-screen/QuizScreen";

// styles
import "./index.less";

export default function Screens() {
  return (
    <Switch>
      <Route exact path="/" component={CoursesListScreen} />
      <Route path="/course/:courseId/:taskId?" component={CourseScreen} />
      <Route path="/quiz/:courseId/" component={QuizScreen} />
    </Switch>
  );
}

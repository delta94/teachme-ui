import React from "react";
import { Switch, Route } from "react-router-dom";

import CoursesListScreen from "./courses/courses-list-screen";
import CourseScreen from "./courses/course-screen";
import QuizScreen from "./courses/quiz-screen";

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

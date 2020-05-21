import React, { useState, useEffect, useRef, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";

import {
  ICourse,
  CourseState,
} from "../../../../interfaces/courses/courses.interface";
import { getCourseById, parseQuizListItem } from "../coursesUtils";
import "../../../../../styles/screens/courses-screen/course-screen.less";

import { TeachMeContext } from "../../../../App";
import { ProgressBar } from "../../../../components/progress-bar/ProgressBar";
import useViewManager from "../../../../hooks/useViewManager";
import TMListItem from "../../../../components/list/list-item/teach-me-list-item/TMListItem";
import CourseItemsList from "../../../../components/list/course-items-list/CourseItemsList";

type TParams = { courseId: string; taskId: string };

const timing = {
  init: 400,
  reset: 2000,
};

export default function CourseScreen({ match }: RouteComponentProps<TParams>) {
  const tmContext = useContext(TeachMeContext);
  const { tmCourses } = tmContext.tmState;
  const courseSection = useRef();
  const [course, setCourse] = useState(null as ICourse);
  const [includeQuiz, setIncludeQuiz] = useState(false);
  const [selectedTask, setSelectedTask] = useState(undefined);
  const defaultCourseData = { status: 0, state: CourseState.NotStarted };
  const { animateCoreElements } = useViewManager();
  const { courseId, taskId } = match.params;

  useEffect(() => {
    setCourse(null);

    // Using setTimeout for set fadeInUp animation
    const timer = setTimeout(() => {
      const selectedCourse = getCourseById({
        tmCourses,
        id: match.params.courseId,
      });
      if (selectedCourse) {
        setCourse(selectedCourse);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [courseId]);

  useEffect(() => {
    // set selection for adding highlight className to element
    const timerIn = setTimeout(() => {
      setSelectedTask(taskId);
    }, timing.init);

    // reset selection for removing highlight className
    const timerOut = setTimeout(() => {
      setSelectedTask(undefined);
    }, timing.reset);

    return () => {
      clearTimeout(timerIn);
      clearTimeout(timerOut);
    };
  }, [taskId]);

  useEffect(() => {
    if (course) {
      animateCoreElements({
        elements: [courseSection.current],
        animateClassName: "fadeInUp",
        timeout: timing.init,
      });
      const courseIncludeQuiz = Boolean(course.quiz.welcomeScreen);
      const isTested = course.data.state === CourseState.Tested;
      setIncludeQuiz(courseIncludeQuiz && !isTested);
    }
  }, [course, courseId]);

  const handleQuizClick = () => {
    console.log("navigate to quiz");
  };

  return (
    <section className="screen course-screen">
      {course && (
        <section
          ref={courseSection}
          className={`course animated-element ${
            includeQuiz ? "with-quiz" : ""
          }`}
        >
          <header className="course-information">
            <h3 className="screen-title">{course.title}</h3>
            <ProgressBar
              percentCompletion={
                course.data ? course.data.status : defaultCourseData.status
              }
              showPercentages
            />
          </header>
          <div className="course-content">
            <div className="course-lessons-wrapper">
              <CourseItemsList
                items={course.items}
                selectedTaskId={selectedTask}
              />
            </div>
            {includeQuiz && (
              <div className="course-quiz">
                <TMListItem
                  item={parseQuizListItem({
                    quiz: course.quiz,
                    courseId: course.id,
                  })}
                  hideProgressBar
                  overrideLabel={course.quiz.welcomeScreen.buttonText}
                  hideButtonIcon
                />
              </div>
            )}
          </div>
        </section>
      )}
    </section>
  );
}

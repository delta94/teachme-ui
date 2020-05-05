import React, { useState, useEffect, useRef } from "react";
import { RouteComponentProps } from "react-router-dom";

import {
  ICourse,
  CourseState,
  ILesson,
  ITask,
  IQuiz,
} from "../courses.interface";
import { getCourseById } from "../coursesUtils";
import "../../../../../styles/screens/courses-screen/course-screen.less";

import { ProgressBar } from "../../../../components/progress-bar/ProgressBar";
import List from "../../../../components/list/List";
import useViewManager from "../../../../hooks/useViewManager";
import Dropdown from "../../../../components/dropdown/Dropdown";
import TMListItem from "../../../../components/list/list-item/teach-me-list-item/TMListItem";

type TParams = { courseId: string };

export default function CourseScreen({ match }: RouteComponentProps<TParams>) {
  const courseSection = useRef();
  const [course, setCourse] = useState(null as ICourse);
  const defaultCourseData = { status: 0, state: CourseState.NotStarted };
  const { animateCoreElements } = useViewManager();

  const parseTasksToItemList = (tasks: ITask[]) => {
    return tasks.map((task: ITask) => {
      const { icon, ...noIcon } = task;
      return {
        ...noIcon,
        iconType: task.icon,
        link: "https://www.walkme.com/",
      };
    });
  };

  const parseQuizListItem = (quiz: IQuiz) => {
    return {
      ...quiz,
      description:
        "Did you master this course? Use this quiz to assess your Knowledge",
      data: {
        media: quiz.media,
        state: quiz.state,
      },
    };
  };

  const getLessonState = (lesson: ILesson) => {
    const taskCompleted = (task: ITask) => task.state === CourseState.Completed;
    const lessonState = lesson.tasks.some(taskCompleted)
      ? CourseState.Started
      : CourseState.NotStarted;

    const lessonCompleted = lesson.tasks.every(taskCompleted);

    return lessonCompleted ? CourseState.Completed : lessonState;
  };

  useEffect(() => {
    const selectedCourse = getCourseById(match.params.courseId);
    setCourse(selectedCourse);
  }, []);

  useEffect(() => {
    if (course) {
      animateCoreElements({
        elements: [courseSection.current],
        animateClassName: "fadeIn",
        timeout: 300,
      });
    }
  }, [course]);

  return (
    course && (
      <section className="screen course-screen">
        <section
          ref={courseSection}
          className={`course animated-element ${
            course.quiz ? "with-quiz" : ""
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
              {course.lessons.map((lesson: ILesson, index: number) => {
                const lessonNum = index + 1;

                return (
                  <Dropdown
                    className="course-lessons"
                    key={lesson.id}
                    id={lesson.id}
                    title={`Lesson ${lessonNum} - ${lesson.id}`}
                    items={parseTasksToItemList(lesson.tasks)}
                    isOpen={lessonNum === 1}
                    handler={{
                      state: getLessonState(lesson),
                    }}
                  />
                );
              })}

              {course.tasks && (
                <List
                  className="tasks-list"
                  items={parseTasksToItemList(course.tasks)}
                />
              )}
            </div>
            {course.quiz && (
              <div className="course-quiz">
                <TMListItem
                  item={parseQuizListItem(course.quiz)}
                  hideProgressBar
                  extraLabel="Quiz"
                />
              </div>
            )}
          </div>
        </section>
      </section>
    )
  );
}

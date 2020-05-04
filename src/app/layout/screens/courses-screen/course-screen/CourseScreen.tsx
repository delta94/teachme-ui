import React, { useState, useEffect, useRef } from "react";
import { RouteComponentProps } from "react-router-dom";

import { ICourse, CourseState, ILesson, ITask } from "../courses.interface";
import { getCourseById } from "../coursesUtils";
import "../../../../../styles/screens/courses-screen/course-screen.less";

import { ProgressBar } from "../../../../components/progress-bar/ProgressBar";
import List from "../../../../components/list/List";
import useViewManager from "../../../../hooks/useViewManager";
import Dropdown from "../../../../components/dropdown/Dropdown";

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
      <section className="screen course-screen ">
        <section ref={courseSection} className="course animated-element">
          <header className="course-information">
            <h3 className="screen-title">{course.title}</h3>
            <ProgressBar
              percentCompletion={
                course.data ? course.data.status : defaultCourseData.status
              }
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
            <div className="course-quiz"></div>
          </div>
        </section>
      </section>
    )
  );
}

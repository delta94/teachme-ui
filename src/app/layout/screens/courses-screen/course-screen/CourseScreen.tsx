import React, { useState, useEffect, useRef } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import {
  ICourse,
  CourseState,
  ILessonData,
  ILesson,
  ITask,
} from "../courses.interface";
import { getCourseById } from "../coursesUtils";
import "../../../../../styles/screens/courses-screen/course-screen.less";

import { ProgressBar } from "../../../../components/progress-bar/ProgressBar";
import List from "../../../../components/list/List";
import Dropdown from "../../../../components/dropdown/Dropdown";
import useViewManager from "../../../../hooks/useViewManager";

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
      };
    });
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
          <div className="course-lessons">
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
                    state: lesson.state,
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
        </section>
      </section>
    )
  );
}

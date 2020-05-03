import React, { useState, useEffect, useContext } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import {
  ICourse,
  CourseState,
  ILessonData,
  ILesson,
} from "../courses.interface";
import { getCourseById } from "../coursesUtils";
import "../../../../../styles/screens/courses-screen/course-screen.less";

import Button, { ButtonType } from "../../../../components/buttons/Button";
import { ProgressBar } from "../../../../components/progress-bar/ProgressBar";
import List from "../../../../components/list/List";
import { TeachMeContext } from "../../../../App";

type TParams = { courseId: string };

export default function CourseScreen({ match }: RouteComponentProps<TParams>) {
  const tmContext = useContext(TeachMeContext);
  const [course, setCourse] = useState(null);

  const defaultCourseData = { status: 0, state: CourseState.NotStarted };

  useEffect(() => {
    const selectedCourse = getCourseById(match.params.courseId);
    setCourse(selectedCourse);
  }, []);

  return (
    course && (
      <section className="screen course-screen">
        <section className="course">
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
                <div key={lesson.id} className="course-lesson">
                  <header className="lesson-title">
                    <h4>
                      Lesson {lessonNum} - {lesson.id}
                    </h4>
                  </header>
                  <div className="lesson-items">
                    <List
                      className="lessons-list accordion"
                      items={lesson.tasks}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    )
  );
}

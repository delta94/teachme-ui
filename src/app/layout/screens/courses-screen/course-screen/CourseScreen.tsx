import React, { useState, useEffect } from "react";
import { getCourseById } from "../coursesUtils";
import {
  ICourse,
  CourseState,
  ILessonData,
  ILesson,
} from "../courses.interface";
import Button, { ButtonType } from "../../../../components/buttons/Button";
import { ProgressBar } from "../../../../components/progress-bar/ProgressBar";
import List from "../../../../components/list/List";
import { Link } from "react-router-dom";

export default function CourseScreen(props: any) {
  const [course, setCourse] = useState(null);

  const defaultCourseData = { status: 0, state: CourseState.NotStarted };

  const { status, state } = defaultCourseData;

  useEffect(() => {
    const selectedCourse = getCourseById(props.match.params.courseId);
    setCourse(selectedCourse);
  }, []);

  return (
    course && (
      <section className="course-screen">
        <Button id="back_to_courses" tmButtonType={ButtonType.None}>
          <Link to="/">Go Back</Link>
        </Button>

        <section className="course">
          <header className="course-information">
            <h2 className="course-title">{course.title}</h2>
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
                      items={lesson.items}
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

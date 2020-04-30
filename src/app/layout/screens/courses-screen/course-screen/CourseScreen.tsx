import React from "react";
import { ICourse, CourseState, ILessonData } from "../courses.interface";
import Button, { ButtonType } from "../../../../components/buttons/Button";
import { ProgressBar } from "../../../../components/progress-bar/ProgressBar";
import List from "../../../../components/list/List";

export default function CourseScreen({
  course,
  onClickedBack,
}: {
  course: ICourse;
  onClickedBack: () => void;
}) {
  const {
    title,
    data = { status: 0, state: CourseState.NotStarted },
    lessons,
  } = course;
  const { status, state } = data;

  console.log("course screen", course);

  return (
    <section className="course-screen">
      <Button
        id="back_to_courses"
        tmButtonType={ButtonType.None}
        buttonClicked={onClickedBack}
      >
        <span>Go Back</span>
      </Button>

      <section className="course">
        <header className="course-information">
          <h2 className="course-title">{title}</h2>
          <ProgressBar percentCompletion={status} />
        </header>
        <div className="course-lessons">
          {lessons.map((lesson, index) => {
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
  );
}

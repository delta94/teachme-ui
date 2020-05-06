import React, { useState, useEffect, useRef, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";

import {
  ICourse,
  CourseState,
  ICourseItem,
  CourseItemType,
} from "../courses.interface";
import {
  getCourseById,
  parseTasksToItemList,
  getCourseItemState,
  parseQuizListItem,
} from "../coursesUtils";
import "../../../../../styles/screens/courses-screen/course-screen.less";

import { TeachMeContext } from "../../../../App";
import { ProgressBar } from "../../../../components/progress-bar/ProgressBar";
import useViewManager from "../../../../hooks/useViewManager";
import Dropdown from "../../../../components/dropdown/Dropdown";
import ListItem from "../../../../components/list/list-item/ListItem";
import TMListItem from "../../../../components/list/list-item/teach-me-list-item/TMListItem";
import CourseItemsList from "../../../../components/list/course-items-list/CourseItemsList";

type TParams = { courseId: string };

export default function CourseScreen({ match }: RouteComponentProps<TParams>) {
  const tmContext = useContext(TeachMeContext);
  const { tmCourses } = tmContext.tmState;

  const courseSection = useRef();
  const [course, setCourse] = useState(null as ICourse);
  const defaultCourseData = { status: 0, state: CourseState.NotStarted };
  const { animateCoreElements } = useViewManager();

  useEffect(() => {
    const selectedCourse = getCourseById({
      tmCourses,
      id: match.params.courseId,
    });

    setCourse(selectedCourse);
  }, []);

  useEffect(() => {
    if (course) {
      animateCoreElements({
        elements: [courseSection.current],
        animateClassName: "fadeIn",
        timeout: 300,
      });

      console.log("course ", course);
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
              <CourseItemsList items={course.items} />
            </div>
            {/* {course.quiz && (
              <div className="course-quiz">
                <TMListItem
                  item={parseQuizListItem(course.quiz)}
                  hideProgressBar
                  extraLabel="Quiz"
                />
              </div>
            )} */}
          </div>
        </section>
      </section>
    )
  );
}

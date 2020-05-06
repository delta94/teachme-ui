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
              <ul className="course-items">
                {course.items.map((item: ICourseItem, index: number) => {
                  return item.type === CourseItemType.Lesson ? (
                    <li className="lesson-item" key={`dropdown-${item.id}`}>
                      <Dropdown
                        className="course-lessons"
                        id={`lesson ${item.id}`}
                        title={`Lesson ${item.lessonNumber} - ${item.title}`}
                        items={parseTasksToItemList(item.tasks)}
                        isOpen={index === 0}
                        handler={{
                          state: getCourseItemState(item),
                        }}
                      />
                    </li>
                  ) : (
                    <ListItem
                      key={`list-item-${item.id}`}
                      item={item}
                      className={"task-item"}
                      state={getCourseItemState(item)}
                      iconType={item.type}
                    />
                  );
                })}
              </ul>
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

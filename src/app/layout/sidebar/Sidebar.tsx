import React, { useContext } from "react";
import { TeachMeContext } from "../../App";
import CourseItemsList from "../../components/list/course-items-list/CourseItemsList";
import {
  parseCourseItems,
  parseToCourseListItems,
} from "../screens/courses-screen/coursesUtils";
import Dropdown from "../../components/dropdown/Dropdown";

export default function Sidebar() {
  const { tmState, sidebar } = useContext(TeachMeContext);
  const { isOpen, setIsOpen } = sidebar;
  const { tmCourses, isWebApp } = tmState;
  const courses = parseToCourseListItems(tmCourses);

  if (!isWebApp || !isOpen) {
    return <></>;
  }

  return (
    <div className={`sidebar ${isOpen ? "open" : "close"}`}>
      <header className="title">
        <span className="text">All of your lessons</span>
      </header>
      <section className="sidebar-courses-list">
        {courses.map((course) => {
          return (
            <div
              key={`sidebar-${course.id}`}
              className="list sidebar-single-course"
            >
              <header className="course-header">
                <span className="text">Course {course.id}:</span>
              </header>
              <Dropdown
                className="sidebar-courses"
                id={`course ${course.id}`}
                title={course.title}
                items={course.tasks}
                handler={{
                  state: course.data.state,
                }}
                disabledMsg="This course requires completion of all pervious"
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}

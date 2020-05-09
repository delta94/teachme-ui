import React, { useContext } from "react";
import { TeachMeContext } from "../../App";
import CourseItemsList from "../../components/list/course-items-list/CourseItemsList";

export default function Sidebar() {
  const { tmState, sidebar } = useContext(TeachMeContext);
  const { isOpen, setIsOpen } = sidebar;
  const { tmCourses } = tmState;

  if (!tmState.isWebApp) {
    return null;
  } else {
    setIsOpen(true);
  }

  return (
    <div className={`sidebar ${isOpen ? "open" : "close"}`}>
      <header className="title">
        <span className="text">All of your lessons</span>
      </header>
      <section className="sidebar-courses-list">
        {tmCourses.map((course) => {
          return (
            <div className="list single-course-wrapper">
              <CourseItemsList items={course.items} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

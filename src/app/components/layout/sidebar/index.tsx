import React, { useContext } from "react";
import cc from "classcat";

// interfaces
import { ButtonType } from "../../common/button/interface";

// constants
import localization from "../../../constants/localization";

// utils
import { parseToCourseListItems } from "../screens/courses/courses.utils";

// context
import { TeachMeContext } from "../../../providers/TeachmeProvider";

// components
import Dropdown from "../../common/dropdown";
import Button from "../../common/button";
import { ReactComponent as DoubleArrowsLeftIcon } from "../../../../images/icons/double-arrows-left.svg";

// styles
import "./index.less";

/**
 * Sidebar appears only if isWebApp is true
 */
export default function Sidebar() {
  const {
    appState: {
      tmState: { tmCourses, isWebApp },
    },
    sidebar: { sidebarIsOpen, setSidebarIsOpen },
  } = useContext(TeachMeContext);
  const {
    course: courseText,
    courseDisabledMsg,
    sidebar: { sidebarCoursesTitle },
  } = localization;
  const courses = parseToCourseListItems(tmCourses);
  const sidebarClasses = { open: sidebarIsOpen, close: !sidebarIsOpen };

  if (!isWebApp) {
    return <></>;
  }

  return (
    <div className={cc(["sidebar", sidebarClasses])}>
      <Button
        id="toggle-sidebar"
        className={cc(["toggle-sidebar", sidebarClasses])}
        buttonClicked={() => {
          setSidebarIsOpen(!sidebarIsOpen);
        }}
        tmButtonType={ButtonType.NoBorder}
      >
        <span className="icon sidebar-handler">
          <DoubleArrowsLeftIcon />
        </span>
      </Button>
      <header className="title">
        <span className="text">{sidebarCoursesTitle}</span>
      </header>
      <section className="sidebar-courses-list">
        {courses.map((course) => {
          return (
            <div
              key={`sidebar-${course.id}`}
              className="list sidebar-single-course"
            >
              <header className="course-header">
                <span className="text">
                  {courseText} {course.id}:
                </span>
              </header>
              <Dropdown
                className="sidebar-courses"
                id={`course ${course.id}`}
                title={course.title}
                items={course.tasks}
                handler={{
                  state: course.data.state,
                }}
                disabledMsg={courseDisabledMsg}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}

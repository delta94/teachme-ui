import React, { useContext } from "react";

import { ReactComponent as DoubleArrowsLeftIcon } from "../../../images/icons/double-arrows-left.svg";

import "../../../styles/layout/sidebar.less";
import { TeachMeContext } from "../../App";
import { parseToCourseListItems } from "../../utils/coursesUtils";
import Button, { ButtonType } from "../../components/common/buttons/Button";
import Dropdown from "../../components/common/dropdown/Dropdown";
import localization from "../../consts/localization";

export default function Sidebar() {
  const { tmState, sidebar } = useContext(TeachMeContext);
  const { isOpen, setIsOpen } = sidebar;
  const { tmCourses, isWebApp } = tmState;
  const courses = parseToCourseListItems(tmCourses);
  const sidebarStateClass = isOpen ? "open" : "close";

  if (!isWebApp) {
    return <></>;
  }

  return (
    <div className={`sidebar ${sidebarStateClass}`}>
      <Button
        id="toggle-sidebar"
        className={`toggle-sidebar ${sidebarStateClass}`}
        buttonClicked={() => {
          setIsOpen(!isOpen);
        }}
        tmButtonType={ButtonType.NoBorder}
      >
        <span className="icon sidebar-handler">
          <DoubleArrowsLeftIcon />
        </span>
      </Button>
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
                disabledMsg={localization.courseDisabledMsg}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}

import React, { useContext } from "react";

// context
import { TeachMeContext } from "../../../../../providers/TeachmeProvider";

// interfaces
import { ICourseData } from "../interface";
import { IListItem } from "../../../../common/list/list-item";

// utils
import { parseToCourseListItems } from "../utils";

// components
import List from "../../../../common/list";
import TMListItem from "../../../../common/list/list-item/teach-me-list-item";
import UserDetails from "../../../../common/user-details";

// styles
import "./index.less";

export default function CoursesListScreen() {
  const {
    appState: {
      tmState: { isWebApp, tmCourses },
    },
  } = useContext(TeachMeContext);
  const coursesListItems = parseToCourseListItems(tmCourses);

  return (
    <div className="screen courses-screen">
      {!isWebApp && (
        <div className="user-details">
          <UserDetails progressBar />
        </div>
      )}
      <List
        className="courses"
        itemClassName="fadeInUp"
        items={coursesListItems as IListItem<ICourseData>[]}
        itemComponent={TMListItem}
      />
    </div>
  );
}

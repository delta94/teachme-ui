import React, { useContext } from "react";

import { IListItem } from "../../../../common/list/list-item";
import List from "../../../../common/list";
import TMListItem from "../../../../common/list/list-item/teach-me-list-item";
import { ICourseData } from "../interface";
import UserDetails from "../../../../common/user-details";
import { TeachMeContext } from "../../../../../providers/TeachmeProvider";
import { parseToCourseListItems } from "../utils";

// styles
import "./index.less";

export default function CoursesListScreen() {
  const tmContext = useContext(TeachMeContext);
  const { isWebApp, tmCourses } = tmContext.appState.tmState;
  const coursesListItems = parseToCourseListItems(tmCourses);

  return (
    <div className="screen courses-screen">
      {!isWebApp && (
        <div className="user-details">
          <UserDetails progressBar />
        </div>
      )}

      {
        <List
          className="courses"
          itemClassName="fadeInUp"
          items={coursesListItems as IListItem<ICourseData>[]}
          itemComponent={TMListItem}
        />
      }
    </div>
  );
}

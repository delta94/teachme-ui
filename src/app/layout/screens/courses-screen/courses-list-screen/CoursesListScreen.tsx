import React, { useContext } from "react";

import { IListItem } from "../../../../components/list/list-item/ListItem";
import List from "../../../../components/list/List";
import TMListItem from "../../../../components/list/list-item/teach-me-list-item/TMListItem";
import { ICourseData } from "../../../../interfaces/courses/courses.interface";
import UserDetails from "../../../../components/user/user-details/UserDetails";
import { TeachMeContext } from "../../../../App";
import { parseToCourseListItems } from "../coursesUtils";

import "../../../../../styles/screens/courses-screen/courses-list-screen.less";
import { Icon } from "../../../../hooks/useIconManager";

export default function CoursesListScreen() {
  const tmContext = useContext(TeachMeContext);
  const { isWebApp, tmCourses } = tmContext.tmState;
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

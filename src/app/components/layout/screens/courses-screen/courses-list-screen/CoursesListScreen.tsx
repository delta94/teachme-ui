import React, { useContext } from "react";

import { IListItem } from "../../../../common/list/list-item/ListItem";
import List from "../../../../common/list/List";
import TMListItem from "../../../../common/list/list-item/teach-me-list-item/TMListItem";
import { ICourseData } from "../../../../../interfaces/courses/courses.interface";
import UserDetails from "../../../../common/user/user-details/UserDetails";
import { TeachMeContext } from "../../../../../App";
import { parseToCourseListItems } from "../../../../../utils/coursesUtils";

// styles
import "../../../../../../styles/screens/courses-screen/courses-list-screen.less";

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

import React, { useContext } from "react";

import { TeachMeContext } from "../../../../App";
import { parseToCourseListItems } from "../../../../utils/coursesUtils";
import UserDetails from "../../../../components/common/user/user-details/UserDetails";
import List from "../../../../components/common/list/List";
import { IListItem } from "../../../../components/common/list/list-item/ListItem";
import { ICourseData } from "../../../../interfaces/courses/courses.interface";
import TMListItem from "../../../../components/common/list/list-item/teach-me-list-item/TMListItem";

// styles
import "../../../../../styles/screens/courses-screen/courses-list-screen.less";

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

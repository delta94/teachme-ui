import React, { useContext } from "react";

import { IListItem } from "../../../../components/list/list-item/ListItem";
import List from "../../../../components/list/List";
import CourseListItem from "../../../../components/list/list-item/course-list-item/CourseListItem";
import { ICourseData } from "../courses.interface";
import UserDetails from "../../../../components/user/user-details/UserDetails";
import { TeachMeContext } from "../../../../App";
import { parseToCourseListItems } from "../coursesUtils";
import { courses } from "../CoursesScreen";

import "../../../../../styles/screens/courses-screen/courses-list-screen.less";

export default function CoursesListScreen() {
  const coursesListItems = parseToCourseListItems(courses);
  const tmContext = useContext(TeachMeContext);
  const { isWebApp } = tmContext.tmState;
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
        itemComponent={CourseListItem}
      />
    </div>
  );
}

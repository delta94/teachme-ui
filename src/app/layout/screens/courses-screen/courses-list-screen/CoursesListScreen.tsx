import React, { useContext } from "react";

import { IListItem } from "../../../../components/list/list-item/ListItem";
import List from "../../../../components/list/List";
import CourseListItem from "../../../../components/list/list-item/course-list-item/CourseListItem";
import { ICourseData } from "../courses.interface";
import UserDetails from "../../../../components/user/user-details/UserDetails";
import { TeachMeContext } from "../../../../App";
import { parseToCourseListItems } from "../coursesUtils";
import { courses } from "../CoursesScreen";
interface IProps {}

export default function CoursesListScreen(props: IProps) {
  const coursesListItems = parseToCourseListItems(courses);
  const tmContext = useContext(TeachMeContext);
  const { includeLayout } = tmContext.tmState;
  return (
    <div className="courses-screen">
      {!includeLayout && (
        <div className="user-details">
          <UserDetails progressBar />
        </div>
      )}

      <List
        className="courses"
        itemClassName="fadeInUp"
        onSelect={() => {
          console.log("list onSelect");
        }}
        items={coursesListItems as IListItem<ICourseData>[]}
        itemComponent={CourseListItem}
      />
    </div>
  );
}

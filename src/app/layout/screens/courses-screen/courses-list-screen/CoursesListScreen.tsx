import React, { useContext } from "react";

import { IListItem } from "../../../../components/list/list-item/ListItem";
import List from "../../../../components/list/List";
import CourseListItem from "../../../../components/list/list-item/course-list-item/CourseListItem";
import { ICourseData } from "../courses.interface";
import UserDetails from "../../../../components/user/user-details/UserDetails";
import { TeachMeContext } from "../../../../App";

export default function CoursesListScreen({
  courses,
  onSelectedCourse,
}: {
  courses: IListItem<ICourseData>[];
  onSelectedCourse: (selected: IListItem<ICourseData>) => void;
}) {
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
        type="row"
        onSelect={onSelectedCourse}
        items={courses}
        itemComponent={CourseListItem}
      />
    </div>
  );
}

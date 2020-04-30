import React, { useState } from "react";
import { IListItem } from "../../../components/list/list-item/ListItem";
import CoursesListScreen from "./courses-list-screen/CoursesListScreen";
import "../../../../styles/screens/courses-screen/courses-screen.less";

export enum CourseState {
  NotStarted = "not-started",
  Started = "started",
  Completed = "completed",
  Tested = "tested",
}

export interface ICourse {
  state?: CourseState;
  status?: number;
}

export const courses: IListItem<ICourse>[] = [
  {
    id: "user-management",
    title: "User Management",
    thumbnailSrc: "https://picsum.photos/200/200",
  },
  {
    id: "system-introduction",
    title: "System Introduction",
    thumbnailSrc: "https://picsum.photos/200/200",
    extraData: {
      state: CourseState.Started,
      status: 20,
    },
  },
  {
    id: "profile-and-settings",
    title: "Profile and Settings",
    thumbnailSrc: "https://picsum.photos/200/200",
    extraData: {
      state: CourseState.Completed,
      status: 80,
    },
  },
  {
    id: "all-things-template",
    title: "All Thing Template",
    thumbnailSrc: "https://picsum.photos/200/200",
    extraData: {
      state: CourseState.Tested,
      status: 100,
    },
  },
];
export default function CoursesScreen() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const onSelectedCourse = (selected: IListItem<ICourse>) => {
    console.log("onSelectedCourse selected", selected);
    setSelectedCourse(selected);
  };

  return selectedCourse ? (
    <div className="course-screen">{JSON.stringify(selectedCourse)}</div>
  ) : (
    <CoursesListScreen courses={courses} onSelectedCourse={onSelectedCourse} />
  );
}

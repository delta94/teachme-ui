import React, { useState, useEffect } from "react";
import InformationScreen from "../../components/information-screen/InformationScreen";
import Content from "../../components/content/Content";
import List from "../../components/list/List";
import { IListItem } from "../../components/list/ListItem";
import CourseListItem from "../../components/course/CourseListItem";

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

const courses: IListItem<ICourse>[] = [
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

export default function Main() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const onSelectedCourse = (selected: IListItem<ICourse>) => {
    console.log("onSelectedCourse selected", selected);
    setSelectedCourse(selected);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });
  return (
    <div className="main">
      {/* TODO: improve InformationScreen component */}
      {isLoading && <InformationScreen />}
      {!isLoading &&
        (selectedCourse ? (
          // <Content />
          JSON.stringify(selectedCourse)
        ) : (
          <List
            className="courses"
            type="row"
            onSelect={onSelectedCourse}
            items={courses}
            itemComponent={CourseListItem}
          />
        ))}
    </div>
  );
}

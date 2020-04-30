import React, { useState, useEffect } from "react";
import { IListItem } from "../../../components/list/list-item/ListItem";
import CoursesListScreen from "./courses-list-screen/CoursesListScreen";
import { ICourse, CourseState, ICourseData } from "./courses.interface";
import { parseToCourseListItems, getCourseById } from "./coursesUtils";
import CourseScreen from "./course-screen/CourseScreen";

import "../../../../styles/screens/courses-screen/courses-screen.less";

export const courses: ICourse[] = [
  {
    id: "user-management",
    title: "User Management",
    media: {
      thumbnail: {
        ratio_1_1: "https://picsum.photos/200/200",
      },
    },
    lessons: [
      {
        id: "welcome-to-lightning",
        title: "Welcome to Lightning",
        items: [
          {
            id: "welcome-to-lightning-tour",
            title: "Welcome to Lightning Tour",
            state: CourseState.Completed,
          },
          {
            id: "trailhead",
            title: "Trailhead",
          },
          {
            id: "how-to-create-a-new-profile",
            title: "How to Create a New Profile",
          },
        ],
      },
      {
        id: "watch-or-read-training-content",
        title: "Watch/Read Training Content",
        items: [
          {
            id: "welcome-to-lightning-tour",
            title: "Welcome to Lightning Tour",
            state: CourseState.Completed,
          },
          {
            id: "trailhead",
            title: "Trailhead",
          },
          {
            id: "how-to-create-a-new-profile",
            title: "How to Create a New Profile",
          },
        ],
      },
    ],
  },
  {
    id: "system-introduction",
    title: "System Introduction",
    media: {
      thumbnail: {
        ratio_1_1: "https://picsum.photos/200/200",
      },
    },
    data: {
      state: CourseState.Started,
      status: 20,
    },
    lessons: [
      {
        id: "welcome-to-lightning",
        title: "Welcome to Lightning",
        items: [
          {
            id: "welcome-to-lightning-tour",
            title: "Welcome to Lightning Tour",
            state: CourseState.Completed,
          },
          {
            id: "trailhead",
            title: "Trailhead",
          },
          {
            id: "how-to-create-a-new-profile",
            title: "How to Create a New Profile",
          },
        ],
      },
      {
        id: "watch-or-read-training-content",
        title: "Watch/Read Training Content",
        items: [
          {
            id: "welcome-to-lightning-tour",
            title: "Welcome to Lightning Tour",
            state: CourseState.Completed,
          },
          {
            id: "trailhead",
            title: "Trailhead",
          },
          {
            id: "how-to-create-a-new-profile",
            title: "How to Create a New Profile",
          },
        ],
      },
    ],
  },
  {
    id: "profile-and-settings",
    title: "Profile and Settings",
    media: {
      thumbnail: {
        ratio_1_1: "https://picsum.photos/200/200",
      },
    },
    data: {
      state: CourseState.Completed,
      status: 80,
    },
    lessons: [
      {
        id: "welcome-to-lightning",
        title: "Welcome to Lightning",
        items: [
          {
            id: "welcome-to-lightning-tour",
            title: "Welcome to Lightning Tour",
            state: CourseState.Completed,
          },
          {
            id: "trailhead",
            title: "Trailhead",
          },
          {
            id: "how-to-create-a-new-profile",
            title: "How to Create a New Profile",
          },
        ],
      },
      {
        id: "watch-or-read-training-content",
        title: "Watch/Read Training Content",
        items: [
          {
            id: "welcome-to-lightning-tour",
            title: "Welcome to Lightning Tour",
            state: CourseState.Completed,
          },
          {
            id: "trailhead",
            title: "Trailhead",
          },
          {
            id: "how-to-create-a-new-profile",
            title: "How to Create a New Profile",
          },
        ],
      },
    ],
  },
  {
    id: "all-things-template",
    title: "All Thing Template",
    media: {
      thumbnail: {
        ratio_1_1: "https://picsum.photos/200/200",
      },
    },
    data: {
      state: CourseState.Tested,
      status: 100,
    },
    lessons: [
      {
        id: "welcome-to-lightning",
        title: "Welcome to Lightning",
        items: [
          {
            id: "welcome-to-lightning-tour",
            title: "Welcome to Lightning Tour",
            state: CourseState.Completed,
          },
          {
            id: "trailhead",
            title: "Trailhead",
          },
          {
            id: "how-to-create-a-new-profile",
            title: "How to Create a New Profile",
          },
        ],
      },
      {
        id: "watch-or-read-training-content",
        title: "Watch/Read Training Content",
        items: [
          {
            id: "welcome-to-lightning-tour",
            title: "Welcome to Lightning Tour",
            state: CourseState.Completed,
          },
          {
            id: "trailhead",
            title: "Trailhead",
          },
          {
            id: "how-to-create-a-new-profile",
            title: "How to Create a New Profile",
          },
        ],
      },
    ],
  },
];

export default function CoursesScreen() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const coursesListItems = parseToCourseListItems(courses);

  const onSelectedCourse = (selected: IListItem<ICourseData>) => {
    const selectedCourse = getCourseById(selected.id);
    setSelectedCourse(selectedCourse);
  };

  const resetCourseSelection = () => {
    setSelectedCourse(null);
  };

  // TODO: remove before upload to develop
  useEffect(() => {
    setSelectedCourse(courses[2]);
  }, []);

  return selectedCourse ? (
    <CourseScreen
      course={selectedCourse}
      onClickedBack={resetCourseSelection}
    />
  ) : (
    <CoursesListScreen
      courses={coursesListItems as IListItem<ICourseData>[]}
      onSelectedCourse={onSelectedCourse}
    />
  );
}

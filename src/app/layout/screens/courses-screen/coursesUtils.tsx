import {
  ICourse,
  ICourseBE,
  CourseState,
  ICourseItemBE,
} from "./courses.interface";
import { courses } from "./CoursesScreen";
import { IListItem } from "../../../components/list/list-item/ListItem";

export const parseToCourseListItems = (courses: ICourse[]): IListItem<{}>[] => {
  return courses.map((course) => {
    const { id, title, media, data } = course;

    return {
      id,
      title,
      link: `/course/${id}`,
      clickable: true,
      data: {
        ...data,
        media,
      },
    };
  });
};

export const getCourseById = (id: string): ICourse =>
  courses.find((course) => course.id === id);

export const getPercentagesCompletion = (items: ICourseItemBE[]) => {
  const completedItems = items.filter((item) => item.properties.isCompleted)
    .length;
  return (completedItems / items.length / 1) * 100;
};
export const getCourseData = (course: ICourseBE) => {
  const { items } = course;
  const courseCompleted = items.every((item) => item.properties.isCompleted);

  const courseStatus = getPercentagesCompletion(items);
  const defaultCourseState =
    courseStatus > 0 ? CourseState.Started : CourseState.NotStarted;

  return {
    properties: course.properties,
    state: courseCompleted ? CourseState.Completed : defaultCourseState,
    status: courseStatus,
  };
};

export const parseCourseBE = (courses: ICourseBE[]): ICourse[] =>
  courses.map((course, index) => {
    return {
      ...course,
      id: (index + 1).toString() as string,
      media: {
        thumbnail: {
          ratio_1_1: "https://picsum.photos/200/200",
          ratio_2_1: "https://picsum.photos/310/140",
        },
      },
      data: getCourseData(course),
    };
  });

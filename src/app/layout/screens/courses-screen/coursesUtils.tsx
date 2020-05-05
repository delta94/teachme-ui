import { ICourse } from "./courses.interface";
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

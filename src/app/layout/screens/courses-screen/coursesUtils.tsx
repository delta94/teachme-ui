import { ICourse, ICourseListItem, ILesson } from "./courses.interface";
import { courses } from "./CoursesScreen";

export const parseToCourseListItems = (
  courses: ICourse[]
): ICourseListItem[] => {
  return courses.map((course) => {
    const { id, title, media, data } = course;

    return {
      id,
      title,
      thumbnailSrc: media.thumbnail.ratio_1_1,
      data,
    };
  });
};

export const getCourseById = (id: string): ICourse =>
  courses.find((course) => course.id === id);

import {
  ICourse,
  ICourseBE,
  CourseState,
  ICourseItemBE,
  CourseItemType,
  ICourseItem,
  TaskIcon,
  IQuiz,
} from "./courses.interface";
import { IListItem } from "../../../components/list/list-item/ListItem";

export const getCourseById = ({
  tmCourses,
  id,
}: {
  tmCourses: ICourse[];
  id: string;
}): ICourse => tmCourses.find((course) => course.id === id);

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

export const getCoursePercentagesCompletion = (items: ICourseItemBE[]) => {
  const completedItems = items.filter((item) => item.properties.isCompleted)
    .length;
  const results = (completedItems / items.length / 1) * 100;
  return Math.floor(results);
};

export const getCourseState = (course: ICourseBE, courseStatus: number) => {
  const { items, quiz } = course;
  const courseCompleted = items.every((item) => item.properties.isCompleted);
  let defaultState =
    courseStatus > 0 ? CourseState.Started : CourseState.NotStarted;

  if (course.properties.isDisabled) {
    defaultState = CourseState.Disabled;
  }

  const completedState =
    quiz && quiz.properties.isCompleted
      ? CourseState.Tested
      : CourseState.Completed;

  return courseCompleted ? completedState : defaultState;
};

export const getCourseData = (course: ICourseBE) => {
  const courseStatus = getCoursePercentagesCompletion(course.items);
  const state = getCourseState(course, courseStatus);
  return {
    state,
    status: state === CourseState.Disabled ? 0 : courseStatus,
    properties: course.properties,
  };
};

export const getCoursesTotalStatus = (courses: ICourse[]) => {
  const courseStatusReducer = (acc: number, cur: number) => {
    return acc + cur;
  };
  const coursesStatusArr = courses.map((course) => {
    return course.data.status;
  });
  const sumCoursesStatus = coursesStatusArr.reduce(courseStatusReducer);
  return sumCoursesStatus / courses.length;
};

export const parseCourseBE = (courses: ICourseBE[]): ICourse[] =>
  courses.map((course, index) => {
    const courseId = (index + 1).toString() as string;
    return {
      ...course,
      id: courseId,
      items: parseCourseItems(course.items),
      media: {
        thumbnail: {
          ratio_1_1: "https://picsum.photos/200/200",
          ratio_2_1: "https://picsum.photos/310/140",
        },
      },
      data: getCourseData(course),
      quiz: {
        ...course.quiz,
        media: {
          thumbnail: {
            ratio_1_1: "https://picsum.photos/200/200",
            ratio_2_1: "https://picsum.photos/310/140",
          },
        },
      },
    };
  });

export const parseCourseItems = (items: ICourseItemBE[]): ICourseItem[] => {
  let lessonNumber = 1;

  const parsedItems = items.map(
    (item: ICourseItemBE): ICourseItem => {
      const isLessonType = item.type === CourseItemType.Lesson;
      const { childNodes, ...noChildNodes } = item;
      const tasks =
        item.childNodes &&
        item.childNodes.map((task) => {
          return {
            ...task,
            id: task.id.toString() as string,
          };
        });
      const itemData = {
        ...noChildNodes,
        id: item.id.toString() as string,
        lessonNumber: isLessonType ? lessonNumber : undefined,
        tasks,
      };

      if (isLessonType) {
        lessonNumber = lessonNumber + 1;
      }

      return itemData;
    }
  );

  return parsedItems;
};

export const parseTask = (task: ICourseItem): IListItem<{}> => {
  return {
    id: task.id,
    title: task.title,
    iconType: task.type as TaskIcon,
    link: "https://www.walkme.com/",
    externalLink: true,
    state: getCourseItemState(task),
  } as IListItem<{}>;
};

export const parseTasksToItemList = (tasks: ICourseItem[]): IListItem<{}>[] => {
  return tasks.map(parseTask);
};

export const parseQuizListItem = ({
  quiz,
  courseId,
}: {
  quiz: IQuiz;
  courseId: string;
}) => {
  // TODO: add types to the rest of quiz data
  return {
    id: `quiz-${courseId}`,
    title: "Course Assessment",
    description:
      "Did you master this course? Use this quiz to assess your Knowledge",
    data: {
      media: quiz.media,
      state: quiz.state,
    },
  };
};

export const isCourseItemCompleted = (item: ICourseItem) =>
  item.properties.isCompleted;

export const isCourseItemDisabled = (item: ICourseItem) => {
  const isNotAvailable =
    item.properties.isAvailable !== undefined && !item.properties.isAvailable;
  return item.properties.isDisabled || isNotAvailable;
};

export const getCourseItemState = (item: ICourseItem) => {
  let itemState = CourseState.Started;

  if (item.type === CourseItemType.Lesson && item.tasks) {
    let lessonCompleted;

    if (isCourseItemDisabled(item)) {
      itemState = CourseState.Disabled;
    } else {
      itemState = item.tasks.some(isCourseItemCompleted)
        ? CourseState.Started
        : CourseState.NotStarted;

      lessonCompleted =
        item.properties.isCompleted && item.tasks.every(isCourseItemCompleted);
    }

    itemState = lessonCompleted ? CourseState.Completed : itemState;
  } else {
    if (isCourseItemDisabled(item)) {
      itemState = CourseState.Disabled;
    } else {
      itemState = isCourseItemCompleted(item)
        ? CourseState.Completed
        : CourseState.NotStarted;
    }
  }

  return itemState;
};

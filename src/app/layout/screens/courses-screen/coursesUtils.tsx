import {
  ICourse,
  ICourseBE,
  CourseState,
  ICourseItemBE,
  CourseItemType,
  ICourseItem,
  TaskIcon,
  IQuiz,
  ICourseData,
} from "../../../interfaces/courses/courses.interface";
import { IListItem } from "../../../components/list/list-item/ListItem";

export const parseToCourseListItems = (
  courses: ICourse[]
): IListItem<ICourseData>[] => {
  return courses.map((course) => {
    const { id, title, media, data, items } = course;

    return {
      id,
      title,
      link: `/course/${id}`,
      tasks: items.map((item) => parseTask(item)),
      clickable: data.state === CourseState.Disabled ? false : true,
      data: {
        ...data,
        media,
      },
    };
  });
};

export const parseTask = (task: ICourseItem): IListItem<{}> => {
  return {
    id: task.id,
    title: task.title,
    type: task.type,
    link: "https://www.walkme.com/",
    externalLink: true,
    // useWalkMeSdk: true,
    tasks: task.tasks && parseTasksToItemList(task.tasks),
    state: task.state,
  } as IListItem<{}>;
};

export const parseTasksToItemList = (tasks: ICourseItem[]): IListItem<{}>[] =>
  tasks.map(parseTask);

export const getCoursePercentagesCompletion = (items: ICourseItemBE[]) => {
  const completedItems = items.filter((item) => isCourseItemCompleted(item))
    .length;
  const results = (completedItems / items.length / 1) * 100;
  return Math.floor(results);
};

export const getCourseState = (course: ICourseBE, courseStatus: number) => {
  const { items, quiz } = course;

  const courseCompleted = items.every((item) => isCourseItemCompleted(item));
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

export const parseCourseData = (course: ICourseBE) => {
  const courseStatus = getCoursePercentagesCompletion(course.items);
  const state = getCourseState(course, courseStatus);
  return {
    state,
    status: state === CourseState.Disabled ? 0 : courseStatus,
    properties: course.properties,
  };
};

export const parseQuizListItem = ({
  quiz,
  courseId,
}: {
  quiz: IQuiz;
  courseId: string;
}) => {
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

export const parseSingleCourseBE = ({
  course,
  courseNumber,
  courseImg,
}: {
  course: ICourseBE;
  courseNumber: number;
  courseImg: number;
}): ICourse => {
  return {
    ...course,
    id: courseNumber.toString() as string,
    items: parseCourseItems(course.items),
    media: {
      thumbnail: {
        ratio_1_1: `course/course-${courseImg}-ratio-1_1.jpg`,
        ratio_2_1: `course/course-${courseImg}-ratio-2_1.jpg`,
      },
    },
    data: parseCourseData(course),
    quiz: {
      ...course.quiz,
      media: {
        thumbnail: {
          ratio_1_1: "quiz/quiz-ratio-1_1.jpg",
          ratio_2_1: "quiz/quiz-ratio-2_1.jpg",
        },
      },
    },
  };
};

export const parseCoursesBE = (courses: ICourseBE[]): ICourse[] => {
  let courseImgNumber = 1;
  let courseImgLength = 5;

  const parsedCourses = courses.map((course, index) => {
    const courseNumber = index + 1;
    const singleCourse = parseSingleCourseBE({
      course,
      courseImg: courseImgNumber,
      courseNumber,
    });
    const resetCourseImgNumber = courseNumber % courseImgLength === 0;
    courseImgNumber = resetCourseImgNumber ? 1 : courseImgNumber + 1;

    return singleCourse;
  });

  return parsedCourses;
};

export const parseCourseItems = (items: ICourseItemBE[]): ICourseItem[] => {
  let lessonNumber = 1;

  const parsedItems = items.map(
    (item: ICourseItemBE): ICourseItem => {
      const isLessonType = item.type === CourseItemType.Lesson;
      const { childNodes, ...noChildNodes } = item;
      const tasks =
        item.childNodes &&
        item.childNodes.map((task) => {
          const parsedTask = {
            ...task,
            id: task.id.toString() as string,
          };
          const taskState = getCourseItemState(parsedTask);
          return { ...parsedTask, state: taskState };
        });

      const parsedItem = {
        ...noChildNodes,
        id: item.id.toString() as string,
        lessonNumber: isLessonType ? lessonNumber : undefined,
        tasks,
      };

      const itemState = getCourseItemState(parsedItem);

      if (isLessonType) {
        lessonNumber = lessonNumber + 1;
      }

      return { ...parsedItem, state: itemState };
    }
  );

  return parsedItems;
};

export const getCourseById = ({
  tmCourses,
  id,
}: {
  tmCourses: ICourse[];
  id: string;
}): ICourse => tmCourses.find((course) => course.id === id);

/**
 * Calculate course percentages completion
 * @param courses
 */
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

export const isCourseItemCompleted = (item: ICourseItem | ICourseItemBE) =>
  item.properties.isCompleted;

export const isCourseItemDisabled = (item: ICourseItem | ICourseItemBE) => {
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

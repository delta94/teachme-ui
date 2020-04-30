import { IListItem } from "../../../components/list/list-item/ListItem";

export enum CourseState {
  NotStarted = "not-started",
  Started = "started",
  Completed = "completed",
  Tested = "tested",
}

export interface ILessonData {
  state?: CourseState;
}
export interface ILessonListItem {
  id: string;
  title: string;
  data?: ILessonData;
}

export interface ILessonItem {
  id: string;
  title: string;
  state?: CourseState;
}
export interface ILesson {
  id: string;
  title: string;
  items: ILessonItem[];
}

export interface ICourse {
  id: string;
  title: string;
  data?: {
    state?: CourseState;
    status?: number;
  };
  media: {
    thumbnail: {
      ratio_1_1: string;
    };
  };
  lessons: ILesson[];
}

export interface ICourseData {
  state?: CourseState;
  status?: number;
}

export interface ICourseListItem extends IListItem<ICourseData> {
  thumbnailSrc: string;
}
